---
title: 'About'
image: '/assets/IISc.jpeg'
# alt: 'Urara'
created: 2021-11-04
# updated: 2021-12-12
tags:
  - 'ACM Gordon Bell Prize'
  - 'DFT-FE'
---

<p style="text-align:center;">Main Building at IISc, Bangalore</p>

Hi, my name’s Gourab and I’m a PhD student working under the supervision of [Prof. Phani Motamarri](https://sites.google.com/view/matrix-lab/bio-of-the-pi) at [MATRIX Lab](https://sites.google.com/view/matrix-lab), [Department of Computational and Data Sciences](https://cds.iisc.ac.in), [Indian Institute of Science (IISc), Bangalore](https://iisc.ac.in). My research focuses on developing hardware-aware computational algorithms and novel implementation techniques to accelerate large-scale iterative eigenvalue and linear solvers on heterogeneous architectures. This includes developing matrix-free methods, mixed-precision strategies, compressed basis techniques, communication-avoiding algorithms, fast diagonalization and hybrid Schwarz preconditioners. These procedures can be applied to accelerate solvers employed in various fields, in particular, the quantum modeling of materials, which is carried out on extreme-scale computing architectures using finite-element discretization of the Kohn-Sham density functional theory equations.

---

## Education

**_M.S. in Physics_** (2018-2019) <br>
**Indian Institute of Science, Bangalore**

Implemented a time-dependent density functional theory module in an in-house Python port of Quantum ESPRESSO and applied it to study the response or the induced polarization when a time-dependent electric field is applied to a system. Master's thesis titled “_Time-dependent Density Functional Theory_” under Prof. Manish Jain.

**_B.Sc. (Research) in Physics (First Class)_** (2014-2018) <br>
**Indian Institute of Science, Bangalore**

Studied Non-Hermitian PT-Symmetric Quantum Hamiltonian models used to describe nonequilibrium steady states of dissipative quantum systems. Bachelor's thesis titled “_Orbital Effect of Magnetic Field on a Current Driven System_” under Prof. Sumilan Banerjee.

---

## Experience

Contributed to [**DFT-FE**](https://sites.google.com/umich.edu/dftfe) project [**_(Das et al., 2022)_**](https://doi.org/10.1016/j.cpc.2022.108473) <br>
**_(Workhorse behind the [2023 ACM Gordon Bell Prize](https://www.acm.org/media-center/2023/november/gordon-bell-prize-2023))_**

DFT-FE (C++/CUDA/MPI) is a massively parallel finite-element based open-source code for material modeling using density functional theory (DFT). DFT-FE can handle periodic, non-periodic and semi-periodic calculations. It can further handle both pseudopotential (ONCV, Troullier-Martins) and all-electron (non-relativistic) calculations; XC functionals supported are LDA, GGA (including spin-polarized); capabilities include ground-state calculations, structural relaxations (ionic, cell), ab-initio MD (NVE). Scalability tested on ~200,000 MPI tasks on many-core architectures and ~64,000 GPUs on hybrid CPU-GPU architectures.

**_Project Associate_** (2020-2021) <br>
**MATRIX Lab, Department of Computational and Data Sciences, IISc**

Developed hardware-aware computational algorithms based on the matrix-free paradigm to evaluate on-the-fly finite-element discretized matrix-multivector products arising in solving the DFT problem without storing the cell-level matrices or the global sparse matrix, under the supervision of [Prof. Phani Motamarri](https://sites.google.com/view/matrix-lab/bio-of-the-pi).

**_KVPY Summer Project_** (May 2016 - July 2016) <br>
**Theoretical Condensed Matter Group, Department of Physics, IISc**

Studied the Ising model and spin systems using neural networks under Prof. Tanmoy Das.

**_KVPY Summer Project_** (May 2015 - July 2015) <br>
**Tomography Lab, Department of Physics, IISc**

Studied the variation in DOLP of light propagating through turbid media under Prof. Rajan Kanhirodan.

**_Treasurer_** (2024 - 2025) <br>
**IISc ACM Student Chapter**

Managed the finances and organized various events for the [IISc ACM Student Chapter](https://iisc.acm.org/).

**_Student Representative_** (2025 - 2026) <br>
**[IISc CDS Wellness Committee](https://cds.iisc.ac.in/internal-resources/department-wellness-committee/)**

Supporting the mental health and well-being of students in the department and organizing wellness sessions.

---

## Honors and Awards
[**ACM Gordon Bell Prize**](https://www.acm.org/media-center/2023/november/gordon-bell-prize-2023) <br>
Issued by ACM **_(The highest prize in High Performance Computing)_**

**Prime Minister's Research Fellowship (PMRF)** <br>
Issued by the Ministry of Education (MoE), Government of India

**IEEE TCHPC Travel Award** <br>
Issued by IEEE

**Kishore Vaigyanik Protsahan Yojana Fellowship (KVPY)** <br>
Issued by the Department of Science and Technology (DST), Government of India

---

## Skills
- Expertise in low-level kernel programming using `C/C++`, `CUDA`, `HIP` and `SYCL`, specializing in developing high-performance, scalable codes leveraging `OpenMP` and `MPI` for parallel computing.

- Proficient in `Python` for data analysis and algorithm development, and in developing dynamic web applications using `Svelte`.

---

## Teaching Assistant

- [Programming in Modern C++ (noc26-cs52) at NPTEL (Jan 2026 - April 2026)](https://youtube.com/playlist?list=PLcj3Q8WAlaGz4vMBk_YVZt6n_BNuwNHIQ&si=zGm9K2KpkF1lQwH8)
- [Programming in Modern C++ (noc25-cs144) at NPTEL (July 2025 - Oct 2025)](https://youtube.com/playlist?list=PLcj3Q8WAlaGwVaQzlxXIqwh6-sInD_GnF&si=3XmWv7zSPKvuZNG7)
- [Programming in Modern C++ (noc25-cs58) at NPTEL (Jan 2025 - April 2025)](https://youtube.com/playlist?list=PLcj3Q8WAlaGy_5h0zLlP3LBTzYYtuP3yM&feature=shared)
- [Programming in Modern C++ (noc24-cs125) at NPTEL (July 2024 - Oct 2024)](https://youtube.com/playlist?list=PLcj3Q8WAlaGwzSETKfAdW8f0A_ffsCsSE&feature=shared)
- Numerical Linear Algebra (DS284) at Department of Computational and Data Sciences, IISc (Aug 2024 - Dec 2024)
- Numerical Linear Algebra (DS284) at Department of Computational and Data Sciences, IISc (Aug 2022 - Dec 2022)
