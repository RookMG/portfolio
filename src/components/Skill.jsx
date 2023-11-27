import React from "react";
import {skillText} from "../constants";

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                    Skill <em>할 수 있는 것</em>
                </h2>
                <div className="skill__wrap">
                    {skillText.map((skill, key) => (
                        <article className={`skill__item s${key + 1}`} key={key}>
                            <div className="skill__itemtitle">
                                <h2>{skill.type}</h2>
                            </div>
                            <p className="skill__itembody">{skill.desc}</p>
                        </article>
                    ))}
                    <article className="skill__item se"/>
                </div>
            </div>
        </section>
    );
};

export default Skill;
