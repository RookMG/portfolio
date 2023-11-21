import React from "react";
import {contactText, footerText} from "../constants";
const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                {/*<div className="footer__text">*/}
                {/*    <span>곽민규</span>*/}
                {/*    <span>RookMG</span>*/}
                {/*</div>*/}
                <div className="footer__info">
                    <div className="left">
                        <h3>contact</h3>
                        <ul>
                            {contactText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    이 사이트는 webstoryboy님의 게시글을 참고해 제작되었습니다.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
