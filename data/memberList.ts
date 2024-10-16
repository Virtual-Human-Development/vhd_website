// data/membersList.ts

export type MemberList = {
    id: number;
    title: string;
    imgSrc: string;
    affiliation: string;
    group: string;
    bio: string;
    email?: string;
    twitter?: string;
    scholar?: string;
    linkedin?: string;
    website?: string;
};

export const memberList: MemberList[] = [
    // Advisory Board
    {
        id: 1,
        title: "Gary Bader",
        imgSrc: "/member_pics/gary-bader.webp",
        affiliation: "University of Toronto",
        group: "Advisory Board",
        email: "gary.bader@utoronto.ca",
        bio: "Professor at The Donnelly Centre specializing in computational biology, focusing on the development of methods for understanding development, cancer, and regenerative healing.",
        twitter: "https://twitter.com/garybader1",
        scholar: "https://scholar.google.com/citations?user=22M9eisAAAAJ&hl=en",
        linkedin: "https://www.linkedin.com/in/gary-bader-a08673/"
    },
    {
        id: 1,
        title: "Adriana Dawes",
        imgSrc: "/member_pics/adriana-dawes.webp",
        affiliation: "Ohio State University",
        group: "Advisory Board",
        bio: "No additional information found in the biosketches for Adriana Dawes."
    },
    {
        id: 1,
        title: "Hiroaki Kitano",
        imgSrc: "/member_pics/hiroaki-kitano.webp",
        affiliation: "Kyoto University",
        group: "Advisory Board",
        bio: "No additional information found in the biosketches for Hiroaki Kitano."
    },
    {
        id: 1,
        title: "James Glazier",
        imgSrc: "/member_pics/james-glazier.webp",
        affiliation: "Indiana University",
        group: "Advisory Board",
        email: "jaglazier@gmail.com",
        bio: "Professor of Intelligent Systems Engineering and Director of the Biocomplexity Institute at Indiana University, known for developing computational frameworks like CompuCell3D.",
        website: "http://www.compucell3d.org"
    },
    {
        id: 1,
        title: "Janet Rossant",
        imgSrc: "/member_pics/janet-rossant.webp",
        affiliation: "SickKids Children's Hospital",
        group: "Advisory Board",
        bio: "No additional information found in the biosketches for Janet Rossant."
    },
    {
        id: 1,
        title: "Leah Edelstein-Keshet",
        imgSrc: "/member_pics/leah-edelstein-keshet.webp",
        affiliation: "University of British Columbia",
        group: "Advisory Board",
        email: "keshet@math.ubc.ca",
        bio: "Emerita professor of mathematics at UBC focusing on mathematical models of cell motility, collective behavior, and embryology."
    },
    {
        id: 1,
        title: "Peter Zandstra",
        imgSrc: "/member_pics/peter-zandstra.webp",
        affiliation: "University of British Columbia",
        group: "Advisory Board",
        bio: "No additional information found in the biosketches for Peter Zandstra."
    },
    {
        id: 1,
        title: "Magdalena Zernicka-Goetz",
        imgSrc: "/member_pics/magdalena-zernicka-goetz.webp",
        affiliation: "Caltech",
        group: "Advisory Board",
        bio: "No additional information found in the biosketches for Magdalena Zernicka-Goetz."
    },
    {
        id: 1,
        title: "Steven ten Holder",
        imgSrc: "/member_pics/steven-tenholder.webp",
        affiliation: "Waterloo",
        group: "Advisory Board",
        email: "steve.tenholder@gmail.com",
        bio: "Co-founder of Acorn Biolabs, inventor on key patents, and creator of a CRISPR anti-viral system for plants. Steven's research spans synthetic biology and mathematical modeling.",
        twitter: "https://twitter.com/steventen",
        scholar: "https://scholar.google.com/citations?user=-cBrgMsAAAAJ&hl=en"
    },

// Core Team Members, Theoretical
		{
        id: 2,
        title: "Adam L. MacLean",
        imgSrc: "/member_pics/adam-l-maclean.webp",
        affiliation: "University of Southern California",
        group: "Core Team Members, Theoretical",
        bio: "Assistant Professor studying cell fate decisions using mathematical models and machine learning methods, with a focus on developmental and disease processes."
    },
    {
        id: 2,
        title: "Alexander Fletcher",
        imgSrc: "/member_pics/alexander-fletcher-1.webp",
        affiliation: "University of Sheffield",
        group: "Core Team Members, Theoretical",
        bio: "Professor of Mathematical Biology developing models to understand multicellular tissue formation, morphogenesis, and dynamics, including the development of Chaste, a multiscale modeling library.",
        website: "https://chaste.github.io"
    },
    {
        id: 2,
        title: "Alexandria Volkening",
        imgSrc: "/member_pics/alexandriavolkening.webp",
        affiliation: "Purdue University",
        group: "Core Team Members, Theoretical",
        bio: "Assistant Professor focusing on predictive data-driven modeling of cellular self-organization and variability, using quantitative methods to study developmental processes.",
        email: "avolkening@purdue.edu",
        twitter: "@al_volkening",
        website: "https://www.alexandriavolkening.com"
    },
    {
        id: 2,
        title: "Berta Verd",
        imgSrc: "/member_pics/berta-verd.webp",
        affiliation: "University of Oxford",
        group: "Core Team Members, Theoretical",
        bio: "No additional information found in the biosketches for Berta Verd."
    },
    {
        id: 2,
        title: "Dagmar Iber",
        imgSrc: "/member_pics/dagmar-iber-1.webp",
        affiliation: "ETH Zurich",
        group: "Core Team Members, Theoretical",
        bio: "Professor of Computational Biology, focusing on predictive models of spatio-temporal dynamics in signaling networks and developmental systems.",
        scholar: "https://scholar.google.com/citations?user=oL33MEYAAAAJ&hl=en"
    },
    {
        id: 2,
        title: "Daniel Aguilar-Hidalgo",
        imgSrc: "/member_pics/daniel-aguilar-hidalgo-1.webp",
        affiliation: "University of British Columbia",
        group: "Core Team Members, Theoretical",
        email: "daniel.hidalgo@ubc.ca",
        bio: "Research Associate studying self-organized cell fate control in developmental processes and advancing tissue engineering approaches.",
        twitter: "@emergentcell",
        linkedin: "https://www.linkedin.com/in/emergentcell/"
    },
    {
        id: 2,
        title: "Geoffrey Schiebinger",
        imgSrc: "/member_pics/geoffrey-schiebinger-1.webp",
        affiliation: "University of British Columbia",
        group: "Core Team Members, Theoretical",
        bio: "Assistant Professor developing mathematical foundations for biological data analysis, known for introducing the 'optimal transport hypothesis' for developmental trajectories."
    },
    {
        id: 2,
        title: "Gonca Erdemci-Tandogan",
        imgSrc: "/member_pics/gonca_erdemci-tandogan.webp",
        affiliation: "University of Western Ontario",
        group: "Core Team Members, Theoretical",
        email: "gerdemci@uwo.ca",
        bio: "Assistant Professor specializing in theoretical and computational biophysics, focusing on mechanics of cells, tissues, and viruses.",
        twitter: "@gonca_erdemci"
    },
    {
        id: 2,
        title: "Linus Schumacher",
        imgSrc: "/member_pics/linus-schumacher-1.webp",
        affiliation: "University of Edinburgh",
        group: "Core Team Members, Theoretical",
        bio: "Associate Professor modeling cell interactions in tissue development and regeneration, using computational simulations to understand complex biological systems.",
        scholar: "https://scholar.google.co.uk/citations?user=ZWEBq7EAAAAJ&hl=en"
    },
    {
        id: 2,
        title: "Lutz Brusch",
        imgSrc: "/member_pics/lutz-brusch-1.webp",
        affiliation: "Technische Universität Dresden",
        group: "Core Team Members, Theoretical",
        bio: "Research Group Leader at TU Dresden focusing on the development of the Morpheus modeling framework for multicellular systems, with a background in biophysical modeling.",
        website: "https://Morpheus.gitlab.io"
    },
    {
        id: 2,
        title: "Maria Abou Chakra",
        imgSrc: "/member_pics/maria-abou-chakra.webp",
        affiliation: "University of Toronto",
        group: "Core Team Members, Theoretical",
        email: "maria.abouchakra@utoronto.ca",
        bio: "Senior Research Associate developing mathematical and computational models in theoretical biology, with applications in cell development and behavioral ecology."
    },
    {
        id: 2,
        title: "Morgan Craig",
        imgSrc: "/member_pics/morgan-craig-1.webp",
        affiliation: "University of Montreal",
        group: "Core Team Members, Theoretical",
        bio: "Researcher applying computational biology to study disease dynamics and therapeutic responses, with a focus on hematopoietic stem cell dynamics.",
        scholar: "https://scholar.google.com/citations?user=-cBrgMsAAAAJ&hl=en"
    },
    {
        id: 2,
        title: "Noemi Picco",
        imgSrc: "/member_pics/noemi-picco-1.webp",
        affiliation: "Swansea University",
        group: "Core Team Members, Theoretical",
        bio: "Senior Lecturer developing theoretical models of health and disease, including brain development, cancer dynamics, and sepsis prediction."
    },
    {
        id: 2,
        title: "Ruben Perez-Carrasco",
        imgSrc: "/member_pics/ruben-perez-carrasco-1.webp",
        affiliation: "University College London",
        group: "Core Team Members, Theoretical",
        bio: "Lecturer in theoretical systems biology focusing on genetic circuits, tissue dynamics, and gene regulatory networks during development."
    },
    {
        id: 2,
        title: "Ruth Baker",
        imgSrc: "/member_pics/ruth-baker-1.webp",
        affiliation: "University of Oxford",
        group: "Core Team Members, Theoretical",
        bio: "Professor of Applied Mathematics focusing on computational techniques for studying cell motility, tissue invasion, and developmental processes."
    },
    {
        id: 2,
        title: "Sidhartha Goyal",
        imgSrc: "/member_pics/goyal-sidhartha.webp",
        affiliation: "University of Toronto",
        group: "Core Team Members, Theoretical",
        email: "goyal@physics.utoronto.ca",
        bio: "Associate Professor researching collective behavior in cellular systems, with a focus on microbial immunity and tumor progression.",
        website: "https://goyallab.com"
    },
    {
        id: 2,
        title: "T.J. Sego",
        imgSrc: "/member_pics/tj_sego.webp",
        affiliation: "University of Florida",
        group: "Core Team Members, Theoretical",
        email: "timothy.sego@medicine.ufl.edu",
        bio: "Assistant Professor developing multiscale models of lung epithelium, focusing on immune response and respiratory viral infections."
    },

	// Core Team Members, Experimental

    {
        id: 3,
        title: "Amy Wong",
        imgSrc: "/member_pics/amy-wong-1.webp",
        affiliation: "SickKids Children's Hospital",
        group: "Core Team Members, Experimental",
        email: "apwong@sickkids.ca",
        bio: "Assistant Professor at the University of Toronto and Scientist at SickKids, focusing on human stem cell models to understand lung development and disease mechanisms."
    },
    {
        id: 3,
        title: "Arvind Mer",
        imgSrc: "/member_pics/arvind-mer.webp",
        affiliation: "University of Ottawa",
        group: "Core Team Members, Experimental",
        bio: "Assistant Professor developing machine learning tools for high-throughput data analysis, with a focus on drug response biomarkers and cancer subtypes.",
        website: "https://merlab.github.io"
    },
    {
        id: 3,
        title: "Carl de Boer",
        imgSrc: "/member_pics/carl-de-boer-1.webp",
        affiliation: "University of British Columbia",
        group: "Core Team Members, Experimental",
        bio: "Assistant Professor studying gene regulation using high-throughput experimental methods with a focus on regulatory DNA sequences in stem cells."
    },
    {
        id: 3,
        title: "Daniel Coutu",
        imgSrc: "/member_pics/daniel_coutu-1-scaled.webp",
        affiliation: "Ottawa Hospital Research Institute",
        group: "Core Team Members, Experimental",
        email: "dacoutu@ohri.ca",
        bio: "Researcher and Assistant Professor focusing on skeletal stem cells, developing regenerative methods, and using multi-omics to study tissue degeneration.",
        scholar: "https://scholar.google.com/citations?user=-cBrgMsAAAAJ&hl=en"
    },
    {
        id: 3,
        title: "David Jorg Hans Fraser Knapp",
        imgSrc: "/member_pics/david_knapp-1-scaled.webp",
        affiliation: "Université de Montréal",
        group: "Core Team Members, Experimental",
        email: "david.knapp@umontreal.ca",
        bio: "Assistant Professor at IRIC focusing on gene engineering, leukemia, and tumor microenvironment modeling using CRISPR and stem cell systems.",
        scholar: "https://scholar.google.com/citations?user=ZbqS_8wAAAAJ&hl=en"
    },
    {
        id: 3,
        title: "Guillaume Blin",
        imgSrc: "/member_pics/guillaume-blin-1.webp",
        affiliation: "University of Edinburgh",
        group: "Core Team Members, Experimental",
        bio: "Lecturer studying stem cell biology and regenerative medicine, using imaging techniques to understand cell organization in 3D space during development."
    },
    {
        id: 3,
        title: "Ivana Barbaric",
        imgSrc: "/member_pics/ivana-barbaric-1.webp",
        affiliation: "University of Sheffield",
        group: "Core Team Members, Experimental",
        bio: "Professor of Stem Cell Biology focusing on pluripotent stem cell applications and the impact of genetic stability on lineage specification."
    },
    {
        id: 3,
        title: "Jun Wu",
        imgSrc: "/member_pics/jun-wu-1.webp",
        affiliation: "UT Southwestern Medical Center",
        group: "Core Team Members, Experimental",
        email: "jun2.wu@utsouthwestern.edu",
        bio: "Associate Professor developing novel pluripotent stem cell cultures and blastocyst models for organogenesis and functional tissue generation.",
        twitter: "@leo_jwu"
    },
    {
        id: 3,
        title: "Katie Galloway",
        imgSrc: "/member_pics/katie-galloway-1.webp",
        affiliation: "Massachusetts Institute of Technology",
        group: "Core Team Members, Experimental",
        bio: "Professor developing synthetic circuits for cellular behavior, focusing on cellular transitions and therapies through molecular systems biology."
    },
    {
        id: 3,
        title: "Knut Woltjen",
        imgSrc: "/member_pics/knut-woltjen.webp",
        affiliation: "Kyoto University",
        group: "Core Team Members, Experimental",
        bio: "Associate Professor working on genome and epigenome editing in pluripotent stem cells to develop next-generation cell therapies."
    },
    {
        id: 3,
        title: "Laurent David",
        imgSrc: "/member_pics/laurent-david-1.webp",
        affiliation: "Université de Nantes",
        group: "Core Team Members, Experimental",
        bio: "Associate Professor studying human embryo implantation and reprogramming, developing a 'virtual embryo' model to predict cell fate transitions."
    },
    {
        id: 3,
        title: "Leonardo Morsut",
        imgSrc: "/member_pics/leonardo-morsut-1.webp",
        affiliation: "University of Southern California",
        group: "Core Team Members, Experimental",
        bio: "Assistant Professor using synthetic biology to engineer cellular behavior, known for developing synthetic Notch receptors for therapeutic applications."
    },
    {
        id: 3,
        title: "Miki Ebisuya",
        imgSrc: "/member_pics/miki-ebisuya-1.webp",
        affiliation: "EMBL",
        group: "Core Team Members, Experimental",
        bio: "Professor reconstituting developmental mechanisms in cell culture, creating synthetic tissues, and studying species-specific developmental timing."
    },
    {
        id: 3,
        title: "Mo R. Ebrahimkhani",
        imgSrc: "/member_pics/mo_ebrahimkhani.webp",
        affiliation: "University of Pittsburgh",
        group: "Core Team Members, Experimental",
        bio: "Associate Professor combining synthetic biology and genetic engineering to program human organogenesis and develop novel platforms for early embryogenesis.",
        scholar: "https://scholar.google.com/citations?user=C9BfYt0AAAAJ&hl=en",
        linkedin: "https://www.linkedin.com/in/mo-ebrahimkhani-259a9b44/"
    },
    {
        id: 3,
        title: "Naoki Irie",
        imgSrc: "/member_pics/naoki-irie-1.webp",
        affiliation: "SOKENDAI",
        group: "Core Team Members, Experimental",
        bio: "Professor studying development and evolution, co-founder of the AsiaEvo meeting, and a member of the Science Council of Japan.",
        email: "irie.evolve@gmail.com"
    },
    {
        id: 3,
        title: "Nika Shakiba",
        imgSrc: "/member_pics/nika-shakiba.webp",
        affiliation: "University of British Columbia",
        group: "Core Team Members, Experimental",
        email: "nika.shakiba@ubc.ca",
        bio: "Assistant Professor using synthetic biology to study competitive interactions between cells in developmental systems and to engineer cell behavior.",
        twitter: "@nika_shakiba"
    },
    {
        id: 3,
        title: "Nozomu Yachie",
        imgSrc: "/member_pics/nozomu-yachie-1.webp",
        affiliation: "University of British Columbia",
        group: "Core Team Members, Experimental",
        bio: "Associate Professor and Canada Research Chair developing synthetic DNA recording technologies for high-resolution molecular and cellular dynamics.",
        twitter: "@nzmyachie"
    },
    {
        id: 3,
        title: "Sadao Ota",
        imgSrc: "/member_pics/sadao-ota-1.webp",
        affiliation: "University of Tokyo",
        group: "Core Team Members, Experimental",
        email: "sadaota@solab.rcast.u-tokyo.ac.jp",
        bio: "Associate Professor leading research in quantitative life science, focusing on optical measurements, microfluidics, and genomic technologies.",
        website: "https://www.sadaotalab.net/"
    },
    {
        id: 3,
        title: "Samer Hussein",
        imgSrc: "/member_pics/samer_hussein2.webp",
        affiliation: "Laval University",
        group: "Core Team Members, Experimental",
        email: "samer.hussein@fmed.ulaval.ca",
        bio: "Associate Professor studying gene expression dynamics during stem cell differentiation and the role of long non-coding RNAs in development."
    },
    {
        id: 3,
        title: "Satoru Okuda",
        imgSrc: "/member_pics/satoru_okuda.webp",
        affiliation: "Kanazawa University",
        group: "Core Team Members, Experimental",
        bio: "Associate Professor using computational frameworks to predict and manipulate multicellular dynamics at single-cell resolution.",
        email: "satokuda@staff.kanazawa-u.ac.jp"
    },
    {
        id: 3,
        title: "Takanori Takebe",
        imgSrc: "/member_pics/takanori-takebe.webp",
        affiliation: "University of Cincinnati",
        group: "Core Team Members, Experimental",
        bio: "Professor developing stem cell-derived organoid models for disease research and transplantation, with expertise in hepatobiliary systems."
    },
    {
        id: 3,
        title: "Vincent Pasque",
        imgSrc: "/member_pics/vincent-pasque.webp",
        affiliation: "University of Leuven",
        group: "Core Team Members, Experimental",
        bio: "Associate Professor studying cell plasticity and reprogramming during embryonic development, with a focus on chromatin and nuclear reorganization."
    },

	// Trainee Council

    {
        id: 4,
        title: "Matthieu Heitz",
        imgSrc: "/member_pics/trainees/matthieu-heitz-1.webp",
        affiliation: "University of British Columbia",
        group: "Trainee Council",
        email: "mheitz@math.ubc.ca",
        bio: "Postdoctoral Fellow in the Mathematics Department at UBC, developing mathematical models to understand tissue development and the mechanics of cellular systems using optimal transport theory."
    },
    {
        id: 4,
        title: "Yeganeh Dorri Nokoorani",
        imgSrc: "/member_pics/trainees/yeganeh-dorri-nokoorani.webp",
        affiliation: "University of British Columbia",
        group: "Trainee Council",
        email: "ydorri@student.ubc.ca",
        bio: "PhD student focused on the genetic variants that arise during human pluripotent stem cell expansion, aiming to uncover mechanisms of genomic instability."
    },
    {
        id: 4,
        title: "Harry Chun Man Cheng",
        imgSrc: "/member_pics/trainees/harry-chun-man_cheng-shakiba-1.webp",
        affiliation: "University of British Columbia",
        group: "Trainee Council",
        bio: "Researcher in the Shakiba Lab at UBC, working on competitive interactions within stem cell populations and the development of synthetic biology applications for cell behavior control.",
        email: "hcheng@ubc.ca"
    },
    {
        id: 4,
        title: "Mia Brunetti",
        imgSrc: "/member_pics/trainees/mia-brunetti.webp",
        affiliation: "University of Montreal",
        group: "Trainee Council",
        bio: "Graduate student at the University of Montreal exploring molecular pathways in development and the role of non-coding RNAs in cellular differentiation.",
        email: "mia.brunetti@umontreal.ca"
    },

	// Trainee Members
	
    {
        id: 5,
        title: "Henry Tat Quach",
        imgSrc: "/member_pics/trainees/henry-tat-quach.webp",
        affiliation: "University of Toronto",
        group: "Trainee Members",
        bio: "Graduate student at the University of Toronto focusing on CFTR expression and fetal lung development at SickKids."
    },
    {
        id: 5,
        title: "Joshua Jamie Hislop",
        imgSrc: "/member_pics/trainees/joshua-jamie-hislop.webp",
        affiliation: "University of Pittsburgh",
        group: "Trainee Members",
        bio: "PhD student working on developmental models and tissue morphogenesis in the Laboratory for Synthetic Morphogenetics and Tissue Ecology."
    },
    {
        id: 5,
        title: "Kamyar Keshavarz",
        imgSrc: "/member_pics/trainees/kamyar-keshavarz.webp",
        affiliation: "N/A",
        group: "Trainee Members",
        bio: "Researcher exploring mathematical models in stem cell systems, with a focus on cell interactions and tissue dynamics."
    },
    {
        id: 5,
        title: "Victoire Fort",
        imgSrc: "/member_pics/trainees/victoire-fort-1.webp",
        affiliation: "N/A",
        group: "Trainee Members",
        bio: "Trainee with an interest in cell fate dynamics and tissue engineering techniques."
    },
    {
        id: 5,
        title: "Gabriel Martínez-Gálvez",
        imgSrc: "/member_pics/trainees/gabriel-martinez-galvez.webp",
        affiliation: "N/A",
        group: "Trainee Members",
        bio: "Graduate student focusing on genetic circuits and synthetic biology approaches for controlling cellular behaviors."
    },
    {
        id: 5,
        title: "Ali Shahdoost",
        imgSrc: "/member_pics/stand_in.jpg",
        affiliation: "University of British Columbia",
        group: "Trainee Members",
        bio: "PhD candidate researching competitive cell dynamics and the development of cell-engineering platforms at UBC."
    },
    {
        id: 5,
        title: "Arman Adel",
        imgSrc: "/member_pics/stand_in.jpg",
        affiliation: "University of British Columbia",
        group: "Trainee Members",
        bio: "Graduate student at UBC working on cell engineering applications and the development of competitive biological systems."
    },
    {
        id: 5,
        title: "Spencer Farrell",
        imgSrc: "/member_pics/trainees/spencer_farrell.jpg",
        affiliation: "University of Toronto",
        group: "Trainee Members",
        bio: "Graduate student at the University of Toronto focusing on developmental biology and synthetic morphogenesis."
    },
    {
        id: 5,
        title: "Michael Wu",
        imgSrc: "/member_pics/trainees/michael_wu.webp",
        affiliation: "SickKids Toronto",
        group: "Trainee Members",
        bio: "Researcher studying stem cell applications and pediatric developmental models at SickKids."
    }
];
