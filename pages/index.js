import React from "react";
import config from "../config.json";
import Menu from "../src/components/menu";
import { CSSReset } from "../src/components/cssreset";
import { StyledHeader } from "../src/components/header";
import { StyledContent } from "../src/components/content";
import { TextContext } from "../src/components/menu/components/textmode";

export default HomePage;

const lang = {
    pt: config.pagePT,
    en: config.pageEN
};

function HomePage() {
    const textContext = React.useContext(TextContext);
    // console.log("lang:", lang[textContext.mode]);
    return (
        <>
            <CSSReset />
            <div>
                <Menu lang={lang[textContext.mode]} />
                <Header subtitle={lang[textContext.mode].subtitle} />
                <AllContents sections={lang[textContext.mode].sections} />
            </div>
        </>
    );
}

function Header(props) {
    return (
        <StyledHeader>
            <section className="user-info">
                <div>
                    <h2>{config.title}</h2>
                    <p>{props.subtitle}</p>
                </div>
            </section>
        </StyledHeader>
    );
}

function AllContents({ ...props }) {
    const sections = Object.values(props.sections);
    return (
        <StyledContent>
            {
                Object.entries(sections).map((arr) => {
                    const name = arr[1].name;
                    return (
                        <section key={arr[0]}>
                            {(arr[1].name != null) && (
                                <div>
                                    <h2>{arr[1].name}</h2> {includeLinks(name)}
                                    <div>{arr[1].content1}</div>
                                    <div>{arr[1].content2}</div>
                                    <div>{arr[1].content3}</div>
                                </div>
                            )}
                        </section>
                    )
                })
            }
        </StyledContent>
    );
}

function includeLinks(str) {
    if (str.includes("Aller")) {
        return ((<>
            <a href="https://www.facebook.com/AllerSolucoes/">https://aller.co/</a>
            <br /><br />
        </>));
    }
    if (str.includes("Sciensa")) {
        return ((<>
            <a href="https://www.sciensa.com/">https://www.sciensa.com/</a>
            <br /><br />
        </>));
    }
    if (str.includes("camps")) {
        return ((<>
            - <a href="https://digitalinnovation.one/bootcamps/gft-start-2-java">GFT START #2 Java</a> - <a href="https://certificates.digitalinnovation.one/38D8E205">OK</a>
            <br />
            - <a href="https://digitalinnovation.one/bootcamps/santander-fullstack-developer">Santander Fullstack Dev</a> - <a href="https://certificates.digitalinnovation.one/1E3AB4C9">OK</a>
            <br />
            - <a href="https://digitalinnovation.one/bootcamps/everis-new-talents-java">everis New Talents - Java</a> - <a href="https://certificates.digitalinnovation.one/0044627A">OK</a>
            <br />
            - <a href="https://digitalinnovation.one/bootcamps/everis-new-talents-net">everis New Talents - .NET</a> - <a href="https://certificates.digitalinnovation.one/162105DA">OK</a>
        </>));
    }
    if (str === "") {
        return ((<>
            <a href="https://github.com/ciceroakiles">Link GitHub</a> - <a href="mailto:cicero.akiles@gmail.com">Email</a>
            <br /><br />
        </>));
    }
}
