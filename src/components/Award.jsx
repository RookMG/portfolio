import React from "react";
import {awardText} from "../constants";

const Award = () => {
    return (
        <section id="award">
            <div className="award__inner">
                <h2 className="award__title">
                    Award <em>수상</em>
                </h2>
                <div className="award__wrap">
                    {awardText.map((award, key) => (
                        <article className={`award__item s${key + 1}`} key={key}>
                            <div className="award__itemtitle">
                                <span>{award.date}</span>
                                <h2>{award.title}</h2>
                            </div>
                            <p className="award__itembody">{award.desc}</p>
                        </article>
                    ))}
                    <article className="award__item se"/>
                </div>
            </div>
        </section>
    );
};

export default Award;
