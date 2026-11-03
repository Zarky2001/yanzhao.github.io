import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import "../css/Publications.css";

const publicationAsset = (filename) => `${import.meta.env.BASE_URL}publications/${filename}`;

const publications = [
    {
        id: "dfdf",
        title: "Dynamic Joint Learning Framework with Dual-Task Feature Fusion for Medical Image Classification",
        authors: (
    <>
        Wencheng Lin, Dongqing Li, <strong>Yan Zhao</strong>, Hong Zhao*
    </>
),
        venue: "Applied Soft Computing (ASOC), 2026",
        venueType: "journal",
        tags: ["Multi-granularity", "Image classification", "Image segmentation", "Multi-task learning", "Feature fusion"],
        marker: "DFDF",
        image: publicationAsset("DFDF.png"),
        abstract: "Medical image classification facilitates the advancement of computer-aided clinical diagnosis by modeling complex anatomical structures and their spatial relationships. Recent studies have typically adopted a two-stage approach in which regions of interest are first segmented, followed by the extraction of relevant features for disease classification. However, existing two-stage methods are susceptible to error propagation, whereby segmentation errors directly impair classification accuracy. In this paper, we propose a dynamic joint learning framework with dual-task feature fusion (DFDF) that leverages information from two complementary tasks to enhance diagnostic performance in clinical disease classification. First, the dual-task feature fusion module integrates region-aware and pixel-level features via a multi-granularity feature fusion strategy, thereby providing more comprehensive and discriminative information for image classification. Second, the dynamic joint learning strategy enhances overall classification accuracy by initially emphasizing segmentation to establish spatial awareness and subsequently focusing on classification for refined decision-making. Finally, the dual-backbone architecture of DFDF enables one-stage prediction, thereby avoiding error propagation between segmentation and classification. Exper-imental results demonstrate that DFDF outperforms recent methods by incorporating segmentation as an auxiliary task across four public benchmarks. Specifically, DFDF achieves classification accuracy gains of up to 2.18-10.55% on ISIC2018, Kvasir, COVID-19 CT, and COVID-19 CXR.",
        links: [
            { label: "Paper", url: "" },
            { label: "Code", url: "https://github.com/fhqxa/mmki" },
        ],
    },
    {
        id: "mmki",
        title: "Multi-Scale and Multi-Level Knowledge Integration for Long-Tailed Classification",
        authors: (
    <>
        Yanli Li, <strong>Yan Zhao</strong>, Hong Zhao*
    </>
),
        venue: "Information Sciences (INS), 2026",
        venueType: "journal",
        tags: ["Long-Tailed Image Classification", "Knowledge Transfer"],
        marker: "MMKI",
        image: publicationAsset("mmki.png"),
        abstract: "Real-world data typically exhibit long-tailed distributions, in which tail classes are significantly underrepresented relative to head classes. Knowledge transfer (KT) is widely used to mitigate the effects of class imbalance by exploiting correlations among classes. However, most KT-based methods are designed from the perspective of global features and overlook local feature relationships among classes during KT, limiting their effectiveness when class correlations are globally sparse. To address this limitation, the present study proposes the multiscale and multilevel knowledge integration (MMKI) framework, which explores class correlations from multiple dimensions. First, spatially-aware multiscale feature refinement (SMS) is proposed to mine fine-grained class correlations by aligning primitive-level features. SMS captures class correlations at the local feature level, enabling the modeling of subtle relationships that are difficult to capture using global features. Subsequently, depth-aware multilevel feature distillation (DML) is developed to bidirectionally align shallow and deep predictive distributions. By leveraging information across different network depths, DML integrates complementary information for tail classes. Experiments on four long-tailed datasets demonstrate the effectiveness of MMKI, including a 4.1% improvement in tail accuracy on CIFAR-100-LT.",
        links: [
            { label: "Paper", url: "" },
            { label: "Code", url: "https://github.com/fhqxa/mmki" },
        ],
    },
    {
        id: "dpa-ei",
        title: "DPA-EI: Long-Tailed Classification by Dual Progressive Augmentation from Explicit and Implicit Perspectives",
        authors: (
    <>
        <strong>Yan Zhao</strong>, Wenwei He, Hong Zhao*
    </>
),
        venue: "Knowledge-Based Systems (KBS), 2025",
        venueType: "journal",
        tags: ["Long-Tailed Image Classification", "Data Augmentation"],
        marker: "DPA-EI",
        image: publicationAsset("dpa-ei.png"),
        abstract: "Deep convolutional neural networks have significantly advanced visual recognition tasks; however, handling long-tailed distribution data remains a substantial challenge for machine learning. Data augmentation is widely recognized as an effective technique for long-tailed image classification, but most explicit and implicit methods fail to balance sample-level generalization with feature-level semantic richness. We present a dual progressive augmentation framework that progressively enhances data diversity and representation through explicit and implicit augmentation stages. The explicit stage employs Mixup training to improve sample-level generalization and diversify tail-category representations. The implicit stage incorporates category-level covariance learning and meta-learning to enrich feature-level semantic diversity. Extensive experiments validate the effectiveness of our method, particularly for tail categories. The framework improves tail-category performance by 1%–2% over the second-best method while maintaining head-category performance across different long-tailed datasets.",
        links: [
            { label: "Paper", url: "https://www.sciencedirect.com/science/article/abs/pii/S095070512500108X" },
            { label: "Code", url: "https://github.com/fhqxa/DPA-EI" },
        ],
    },
    {
        id: "hcnn",
        title: "Hierarchical Convolutional Neural Network with Knowledge Complementation for Long-Tailed Classification",
        authors: (
    <>
        Hong Zhao*, Zhengyu Li, Wenwei He, <strong>Yan Zhao</strong>
    </>
),
        venue: "ACM Transactions on Knowledge Discovery from Data (TKDD), 2024",
        venueType: "journal",
        tags: ["Long-Tailed Image Classification", "Knowledge Complementation"],
        marker: "HCNN",
        image: publicationAsset("hcnn.png"),
        abstract: "Existing transfer-learning methods leverage auxiliary information to improve tail-class generalization, but they cannot fully exploit the relationships between auxiliary information and tail classes and may introduce irrelevant knowledge. We propose a hierarchical CNN with knowledge complementation that treats hierarchical relationships as auxiliary information and transfers relevant knowledge to tail classes. Semantic and clustering relationships are integrated into the CNN as hierarchical knowledge to guide feature learning. A complementary strategy jointly exploits both forms of knowledge: semantic knowledge provides prior dependence, while clustering knowledge reduces negative information caused by excessive semantic dependence. This complementary use of hierarchical relationships transfers useful knowledge to tail data and improves long-tailed classification accuracy. Experiments on public benchmarks show that the proposed model outperforms existing methods, including a 3.46% accuracy improvement over the second-best method on long-tailed tieredImageNet.",
        links: [
            { label: "Paper", url: "https://dl.acm.org/doi/full/10.1145/3653717" },
            { label: "Code", url: "https://github.com/fhqxa/lzy_HCKC4" },
        ],
    },
];

export default function Publications() {
    return (
        <div className="card" id="publications">
            <div className="card-title">Publications</div>
            <div className="publications-info-small">
                Selected publications with abstracts and project resources.
            </div>
            <div className="publications-list">
                {publications.map((paper) => (
                    <article key={paper.id} className="publication-card" id={paper.id}>
                        {paper.image ? (
                            <img
                                className="publication-image"
                                src={paper.image}
                                alt={`${paper.title} framework`}
                            />
                        ) : (
                            <div className="publication-placeholder" aria-hidden="true">{paper.marker}</div>
                        )}
                        <div className="publication-content">
                            <div className="publication-venue">
                                <span className={`venue-tag ${paper.venueType}`}>{paper.venue}</span>
                            </div>
                            <div className="publication-title">{paper.title}</div>
                            <div className="publication-authors">{paper.authors}</div>
                            {paper.abstract && (
                                <div className="publication-abstract">
                                    <strong>Abstract.</strong> {paper.abstract}
                                </div>
                            )}
                            <div className="publication-tags">
                                {paper.tags.map((tag) => (
                                    <span key={tag} className="tag-item-show">#{tag}</span>
                                ))}
                            </div>
                            {paper.links?.length > 0 && (
                                <div className="publication-links">
                                    {paper.links.map((link) => (
                                        <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                                            {link.label === "Code" ? <FaGithub aria-hidden="true" /> : <MdArticle aria-hidden="true" />}
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
