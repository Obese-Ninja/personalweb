---
title: Why hybrid Active Directory breaks — and how attackers walk across the seam
date: 2026-07-07
description: What I learned analysing 19 real-world breaches for my MSc dissertation on cross-architecture attack propagation in hybrid Active Directory.
tags: security, active-directory, azure, zero-trust, research
---

For my MSc in Cyber Security I spent the better part of a year on one question: when an enterprise runs **hybrid Active Directory** — on-premises Windows Server AD stitched to Microsoft Entra ID through Azure AD Connect — how do attackers move *across* that seam? Not how they break into the on-prem domain, and not how they abuse the cloud tenant, but how they cross from one to the other.

This is the short, human version of what I found. The full dissertation is a qualitative multiple-case study of 19 publicly documented breaches from 2017 to 2025; here I want to give you the argument without the 87 pages.

## The setup: a bridge that trusts both sides

Roughly 78% of enterprises now run hybrid AD, and almost all of them lean on **Azure AD Connect** to synchronise identities between on-prem and cloud. The uncomfortable truth is that this sync server is not a humble data-replication box. Its service account typically holds **Domain Admin** on-premises *and* **Global Administrator** in Entra ID. It is, in one host, the most privileged object in both worlds.

That means the interesting attack surface isn't on-prem and it isn't cloud. It's the **interstitial space** between them — where trust is assumed, visibility is fragmented, and controls are applied inconsistently. Attackers worked this out years ago. Defenders, mostly, haven't.

## What the breaches actually showed

I coded 19 incidents — SolarWinds, the 2024 Microsoft corporate breach, MGM, Caesars, Okta, LastPass, Scattered Spider, and others — against three research questions. Three patterns came out clearly.

### 1. Synchronisation is the primary attack vector

In **14 of the 19 cases (74%)**, attackers explicitly abused synchronisation infrastructure — the Azure AD Connect server itself, the sync rules, or the object writeback feature. The playbook repeats with unsettling consistency:

- **Azure AD Connect as a privileged conduit.** In SolarWinds, APT29 went straight for the sync servers, extracted the MSOL account credentials, and forged identities into the cloud directory. In not one documented case was the sync server hardened as a Tier 0 asset — no dedicated VLAN, no privileged access workstation, no just-in-time access.
- **Sync-rule manipulation.** The 2023 Azure AD conditional-access tampering incident (18 million accounts) worked because attackers modified policy assignments *through the trusted sync pipeline*, so the changes looked legitimate in the audit logs.
- **Object writeback — the nasty one.** Writeback lets cloud-created groups flow back down to on-prem AD. Create a privileged "Cloud Admins" group in Entra, assign a compromised user, trigger writeback, and that user inherits Domain Admin **without ever touching the on-prem network**. This cloud-to-on-prem inversion was central to MGM and Caesars.

That last direction matters. The frontier threat isn't on-prem-to-cloud escalation any more — it's **bidirectional**. Three cases showed attackers escalating in *either* environment by manipulating the other, effectively using the hybrid architecture itself as a privilege-escalation platform.

### 2. Credentials are universal tokens

The second finding is that hybrid AD treats an identity as a **skeleton key** that works across both trust boundaries with little re-verification:

- **NTLM hash reuse** — hashes dumped from the sync server (via Mimikatz) authenticate to the cloud *and* enable on-prem pass-the-hash. SolarWinds, NVIDIA and Toyota all did this.
- **Pass-Through Authentication abuse** — Cymulate's "Double Agent" vulnerability: control the PTA agent and you can approve *any* login without ever checking a password.
- **SAML token forgery** ("Golden SAML") — steal the ADFS token-signing certificate and you mint valid tokens that survive password resets and domain rebuilds, until someone rotates the certificate. Many victims never did, promptly.

The through-line: once a credential or token is minted, it's rarely challenged again. Across the sample the **median dwell time was 47 days**.

### 3. The controls everyone deploys don't work — and the ones that work, nobody deploys

This was the finding that genuinely surprised me, and it's the one I think about most in my day job.

| Control | Deployed | Prevented the breach |
|---|---|---|
| MFA (any type) | 79% | **0%** |
| Conditional Access | 68% | **0%** |
| PAM / just-in-time | 16% | 67% |
| Network segmentation | 26% | 60% |
| Sync-log monitoring | 5% | 100% |

MFA was present in 15 of 19 incidents and stopped exactly none of them — bypassed via MFA-fatigue, inconsistent enforcement (service principals and legacy protocols exempted), token theft after authentication, or blanket exemptions for "trusted" synchronised accounts. Meanwhile the controls that actually contained breaches — privileged access management, hard network segmentation around the sync server, and monitoring the synchronisation pipeline itself — were deployed in a quarter of cases or fewer.

I called this the **efficacy–deployment gap**: organisations invest in controls that satisfy a compliance checkbox (MFA for NIST 800-53, CAPs for CIS) rather than controls that disrupt the attack patterns actually seen in the wild.

## The five-phase model

Synthesising across all 19 cases, hybrid AD compromises follow a predictable progression:

1. **Initial access** (day 0) — supply chain, phishing, or vuln exploit. Notably, the initial vector had *no correlation* with how bad the outcome was; a cheap phishing email reached the same place as a nation-state supply-chain implant once hybrid infra was in reach.
2. **Privilege escalation** (days 1–8) — recon with BloodHound/ADRecon, then straight for the sync infrastructure.
3. **Credential extraction** (days 8–10) — hash dumps, PTA manipulation, token-signing theft.
4. **Bidirectional escalation** (days 10–15) — writeback abuse and malicious object injection.
5. **Objective execution** (days 15–47) — ransomware, exfiltration, or long-term espionage, with persistence embedded in the *trusted* sync infrastructure so it survives normal incident response.

## What I'd actually tell a security team

If you run hybrid AD, the evidence points to a small number of non-negotiables:

- **Reclassify Azure AD Connect, PTA agents and ADFS as Tier 0.** Treat them exactly like domain controllers: dedicated admin workstations, no internet, JIT access, microsegmentation.
- **Monitor the synchronisation pipeline directly.** It was the single most effective control in my sample and the rarest. Attackers deliberately operate inside the sync trust because nobody's watching it.
- **Stop trusting "internal" or synchronised authentication.** Every MFA exemption for a synced account is a documented bypass path.
- **Harden object writeback** — disable it unless it's operationally essential, and scope it to non-privileged objects when it is.
- **Assume Zero Trust across the seam.** You cannot secure a hybrid environment by hardening on-prem and cloud independently; the whole point is that attackers live in the space between them.

Identity is the perimeter now, and in hybrid AD the perimeter runs straight through the sync server. That's the sentence I'd want a CISO to walk away with.

---

*This post condenses my MSc Cyber Security dissertation, "Security Threats and Mitigation Strategies for Hybrid Active Directory Architectures: A Qualitative Case Study Analysis of Cross-Architecture Attack Propagation" (University of Staffordshire, 2025). Happy to talk about any of it — [get in touch](/#contact).*
