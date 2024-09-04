// data/blogPosts.ts
// Instructions 

export type BlogPost = {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    imgSrc: string;
    date: string;
};

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Evolutionary Behaviours of Cell Systems",
        subtitle: "Naoki Irie: A research talk summary on the relationship between evolution and embryology.",
				content: `
				<p style="text-indent: 2rem;">A robust and stable phenotype can limit evolutionary diversification, similar to how invariant flora exhibit limited diversity. This observation raises the question: why is the body plan conserved? Early stages of development were prone to lethality, acting as a negative selection pressure that conserved the body plan. The more prone early stages are to lethality, the stronger this conservation pressure. This body plan conservation was observed without the presence of positive selection, suggesting that avoiding negative outcomes may have played a more significant role than any selective advantage.</p>
				<h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">Stability and Evolution</h3>
				<p style="text-indent: 2rem;">Pleiotropy, where a single gene affects multiple traits, can act as a constraint. Stages with more pleiotropic genes tend to be more conserved due to the complex interdependencies in their developmental processes. Phenotypic stability can lead to less variation and consequently less diversity. Robust and stable phenotypes could contribute to the long-term conservation of the vertebrate body plan. Less variation inherently means less evolutionary change over time. The stability and robustness of developmental systems contribute to the long-term conservation of body plans, as suggested by Naoki Irie. This conservation could be attributed to various factors, including genetic constraints and developmental robustness.</p>
				<h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">The Role of Gene Usage and Anatomical Features</h3>
				<p style="text-indent: 2rem;">The repeated usage of the same genes (co-options) can have a dual effect on phenotypic evolution. While it can facilitate diversification by providing a stable framework for development, it can also constrain diversification by limiting the scope for variation. The basic anatomical features, such as the body plan, are highly conserved. No new body plans have evolved since the Cambrian explosion, indicating a significant evolutionary constraint. This stability is reflected in the consistent use of the same anatomical structures across diverse species.</p>
				<p style="text-indent: 2rem;">In conclusion, the conservation of the body plan in evolutionary biology is a complex interplay of negative selection, pleiotropic constraints, and phenotypic robustness. These factors contribute to the stability of developmental systems, ultimately limiting evolutionary diversification. The repeated use of genes and the conservation of basic anatomical features further underscore the intricate balance between stability and diversity in evolutionary processes.</p>
		`,
		
        imgSrc: "/noaki_irie.webp",
        date: "July 1, 2023"
    },
    {
        id: 2,
        title: "Early Cell Lineages of the Developing Embryo",
        subtitle: "Maria Abou Chakra and Vincent Pasque: A research talk summary on the properties of early cell development lineages",
				content: `
				<p style="text-indent: 2rem;">Aneuploidies in all pre-implantation lineages can lead to increased competition among cells. Chromosomal gains result in four times the gene expression in cis, affecting the developmental process. Changes in transcription factor dosage can cause regulatory target perturbations. During early embryonic transitions, there are dynamic changes in network connectivity, reflecting the evolving regulatory landscape. Over time, these changes influence cell fate decisions and developmental outcomes.</p>
				<h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">Gene Regulatory Networks and Post-implantation Development</h3>
				<p style="text-indent: 2rem;">Gallardo et al. (BioRxiv 2023) outline a method to construct a general gene regulatory network (GRN) from single-cell RNA sequencing (scRNA-seq) data. This involves identifying expressed genes, selecting regulatory elements such as transcription start sites (TSS), and scanning TSS for transcription factor binding motifs. Post-implantation development is not well characterized, with the identification of new extra-embryonic mesoderm being a key focus area.</p>
				<h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">Reconstructing Early Human Development</h3>
				<p style="text-indent: 2rem;">Reconstructing early human development involves using stem cell models and single-cell multi-omics techniques, as emphasized by Vincent Pasque. This approach helps to model key developmental stages and understand lineage potentials. The stages of early human development include pre-implantation and post-implantation phases, such as zygote formation, inner cell mass differentiation, and the formation of the blastocyst with distinct trophectoderm, epiblast, and primitive endoderm.</p>
				<p style="text-indent: 2rem;">Human blastocysts show complete lineage potential and can self-organize. Key structures include the trophectoderm, naïve epiblast, and primitive endoderm. Unlike other systems, in humans, the trophectoderm or epiblast are not irreversibly restricted. Polycomb Group Proteins (PRC2) repress the induction of all lineages except the trophectoderm. Removing PRC2 increases trophectoderm formation, highlighting its role in early lineage decisions.</p>
				<p style="text-indent: 2rem;">In conclusion, understanding early cell lineages in the developing embryo involves dissecting the complex regulatory networks and dynamic changes during pre-implantation and post-implantation stages. By leveraging advanced techniques like scRNA-seq and multi-omics, researchers can reconstruct these early developmental processes, providing insights into human development and potential implications for stem cell biology and regenerative medicine.</p>
		`,
		
        imgSrc: "/maria_vincent_cell_lineages.webp",
        date: "April 17, 2023"
    },
    {
        id: 3,
        title: "Morphogenesis",
        subtitle: "Sidhartha Goyal and Dagmar Iber: A research talk summary on the principles of morphogenesis",
        content: `
            <p style="text-indent: 2rem;">Early part of delamination needs ingression, involving neural crest cell ingression, EMT, and delamination. Enlarge maps and active fluctuations may play a role, as shown in the dynamic changes in cell shapes and states. Active fluctuations are linked to cell ingression. Can fluctuations and disorder drive morphogenetic events? Evidence suggests they can, influencing cell shape heterogeneity.</p>
            <h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">Unraveling Morphogenesis Principles</h3>
            <p style="text-indent: 2rem;">Creating complex shapes during development requires timed events coordinated in a dynamical process. Key questions include how cells know when to change, how patterns are encoded, how events are coordinated, and how to start or stop growth.</p>
            <h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">Gradients</h3>
            <p style="text-indent: 2rem;">Gradients play a critical role in morphogenesis. The precision of morphogen gradients is essential, as seen in evidence from sources like the French Flag model. Gradients are more precise in older tissues, crucial for skin cells. The precision of gradients influences pattern formation and positional accuracy in embryonic development. Understanding these principles helps decode how precise morphogen gradients guide developmental processes, impacting the spatial and temporal aspects of morphogenesis.</p>
        `,
        imgSrc: "/sidhartha_dagmar_morphogenesis.webp",
        date: "Mar 20, 2023"
    },
    {
        id: 4,
        title: "Waddington Landscape",
        subtitle: "Morgan Craig and David Knapp: A research talk summary on the landscape of differentiation",
        content: `
            <p style="text-indent: 2rem;">Cell landscapes differ by disease and age of individuals, such as Pediatric GBM, Adult GBM, and Adult GSC stem lineages. Tools like pseudotime, clustering, and expression profiling create GRNs of key genes. Signaling pathways (FGF/EGF) and transcriptional programs (Sox2) contribute to functional neural programs. Sox2 is expressed downstream of neural growth factor, indicating a program similar to normal NPCs but not quite the same.</p>
            <h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">Waddington Landscape</h3>
            <p style="text-indent: 2rem;">Discussing how cells change and differentiate with respect to a Waddington landscape from both data and theoretical perspectives. Factors (Takahashi & Yamanaka, Cell 2006) can reprogram cells. Reprogramming is important for easier transplantation, better MHC matching, and understanding cell identity and plasticity.</p>
            <h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">Future Steps</h3>
            <p style="text-indent: 2rem;">Use this data to inform agent-based models. Reprogramming fibroblasts to NPCs and forming neurospheres suggests a mutable landscape that is changing in time. Understanding these dynamics aids in deciphering the complexity of cellular differentiation and disease progression.</p>
        `,
        imgSrc: "/morgan_david.webp",
        date: "Feb 22, 2023"
    },
    {
        id: 5,
        title: "Somite Development",
        subtitle: "Miki Ebisuiya and James Glazier: An in-depth look at the mechanisms of somite formation from theoretical and experimental perspectives.",
        content: `
            <p style="text-indent: 2rem;">How do cells form somite structures? According to the research by Ebisuiya and Glazier, cells can spontaneously form somites under specific conditions. Their findings are based on models and experimental data, including work by Ohs et al. (Science 2021) and Mio et al. (Nature 2022).</p>
            <h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">New Model and Rules for Somite Formation</h3>
            <p style="text-indent: 2rem;">Ebisuiya and colleagues proposed new rules for somite formation, emphasizing the role of cellular polarization, extracellular matrix (ECM), and light junctions at the apical ends. Their model successfully reproduced somite formation as reported in their 2022 publication in Nature Communications.</p>
            <h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">Somitoid Development</h3>
            <p style="text-indent: 2rem;">Somitoids, structures resembling somites, were formed from 350 cells over a period of four days using a specific matrix. Key findings include the necessity of oscillations (referred to as the "clock") and the formation of one somite at a time. Interestingly, the initial cell identity did not impact the eventual size of the somite body, and somite formation required the presence of a matrix.</p>
            <h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">Theoretical Models and Experimental Evidence</h3>
            <p style="text-indent: 2rem;">Somite formation has been a subject of theoretical models for over 40 years, with seminal work by Cooke and Zeeman (1976) introducing the Clock and Wavefront Model. This model took two decades to build and linked oscillatory clocks to segmentation and cell behavior.</p>
            <h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">Current Understanding and Future Directions</h3>
            <p style="text-indent: 2rem;">The current understanding of somite development involves translating oscillatory signals into gradients, but this alone does not fully explain symmetry breaking or signaling pathways. The work by Heitz, Tetel, Glazier, and colleagues (2011), and subsequent research, continues to explore these complex interactions.</p>
            <p style="text-indent: 2rem;">In conclusion, the study of somite development, both theoretically and experimentally, reveals a sophisticated interplay of cellular dynamics, signaling pathways, and developmental timing. Continued research in this area promises to further unravel the intricacies of vertebrate embryogenesis.</p>
        `,
        imgSrc: "/miki_james_somite_development.webp",
        date: "January 19, 2023"
    },
    {
        id: 6,
        title: "This is the new blog post! ",
        subtitle: "Naoki Irie: A research talk summary on the relationship between evolution and embryology.",
				content: `
				<p style="text-indent: 2rem;">A robust and stable phenotype can limit evolutionary diversification, similar to how invariant flora exhibit limited diversity. This observation raises the question: why is the body plan conserved? Early stages of development were prone to lethality, acting as a negative selection pressure that conserved the body plan. The more prone early stages are to lethality, the stronger this conservation pressure. This body plan conservation was observed without the presence of positive selection, suggesting that avoiding negative outcomes may have played a more significant role than any selective advantage.</p>
				<h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">Stability and Evolution</h3>
				<p style="text-indent: 2rem;">Pleiotropy, where a single gene affects multiple traits, can act as a constraint. Stages with more pleiotropic genes tend to be more conserved due to the complex interdependencies in their developmental processes. Phenotypic stability can lead to less variation and consequently less diversity. Robust and stable phenotypes could contribute to the long-term conservation of the vertebrate body plan. Less variation inherently means less evolutionary change over time. The stability and robustness of developmental systems contribute to the long-term conservation of body plans, as suggested by Naoki Irie. This conservation could be attributed to various factors, including genetic constraints and developmental robustness.</p>
				<h3 style="font-size: 1.5rem; color: var(--text-color); margin-top: 2rem;">The Role of Gene Usage and Anatomical Features</h3>
				<p style="text-indent: 2rem;">The repeated usage of the same genes (co-options) can have a dual effect on phenotypic evolution. While it can facilitate diversification by providing a stable framework for development, it can also constrain diversification by limiting the scope for variation. The basic anatomical features, such as the body plan, are highly conserved. No new body plans have evolved since the Cambrian explosion, indicating a significant evolutionary constraint. This stability is reflected in the consistent use of the same anatomical structures across diverse species.</p>
				<p style="text-indent: 2rem;">In conclusion, the conservation of the body plan in evolutionary biology is a complex interplay of negative selection, pleiotropic constraints, and phenotypic robustness. These factors contribute to the stability of developmental systems, ultimately limiting evolutionary diversification. The repeated use of genes and the conservation of basic anatomical features further underscore the intricate balance between stability and diversity in evolutionary processes.</p>
		`,
		
        imgSrc: "/noaki_irie.webp",
        date: "July 1, 2023"
    },
    // Add more blog posts as needed
];
