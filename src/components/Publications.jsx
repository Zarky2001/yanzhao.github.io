import React from "react";
import "../css/Publications.css";

const publicationAsset = (filename) => `${import.meta.env.BASE_URL}publications/${filename}`;

const publications = [
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
        tags: ["Long-Tailed Classification", "Data Augmentation"],
        marker: "DPA-EI",
        image: publicationAsset("dpa-ei.png"),
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
        tags: ["Long-Tailed Classification", "Knowledge Complementation"],
        marker: "HCNN",
        image: publicationAsset("hcnn.png"),
    },
];

export default function Publications() {
    return (
        <div className="card" id="publications">
            <div className="card-title">Publications</div>
            <div className="publications-info-small">
                Publication links, complete author lists, and project materials will be added later.
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
                            <div className="publication-tags">
                                {paper.tags.map((tag) => (
                                    <span key={tag} className="tag-item-show">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
