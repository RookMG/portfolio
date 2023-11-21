import React from "react";
import {certificationText} from "../constants";

const Certification = () => {
    return (
        <section id="certification">
            <div className="certification__inner">
                <h2 className="certification__title">
                    Certification <em>자격증</em>
                </h2>
                <div className="certification__wrap">
                    {certificationText.map((award, key) => (
                        <article className={`certification__item s${key + 1}`} key={key}>
                            <div className="certification__itemtitle">
                                <span>{award.date}</span>
                                <h2>{award.title}</h2>
                            </div>
                            <p className="certification__itembody">{award.desc}</p>
                        </article>
                    ))}
                    <article className="certification__item se"/>
                </div>
            </div>
        </section>
    );
};

export default Certification;
