import React from "react";
import {experienceText} from "../constants";
const Experience = () => {
    return (
        <section id="experience">
            <div className="experience__inner">
                <h2 className="experience__title">
                    EXPERIENCE <em>나의 경험</em>
                </h2>
                <div className="experience__desc">
                    {experienceText.map((experience, key) => (
                        <div className={`s${key+1}`} key={key}>
                            {/*<span>{key + 1}.</span>*/}
                            <h3>{experience.title}</h3>
                            <p>{experience.desc}</p>
                        </div>
                    ))}
                    <div className="se"/>
                </div>
            </div>
        </section>
    );
};

export default Experience;
