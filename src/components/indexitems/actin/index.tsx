import { CaralIcon } from "iconcaral2"
import style from "./index.module.css"
import Translate, {translate} from '@docusaurus/Translate';

interface ActitemProps {
    titleKey: string;
    link: string;
    bg: string;
    descKey: string;
}

function Actitem({ titleKey, link, bg, descKey }: ActitemProps) {
    return (
        <div className={style[bg]}>
            <a href={link} className={style.actinItem}>
                <h3>
                    <Translate id={titleKey} />
                </h3>
                <small>
                    <Translate id={descKey} />
                </small>                
            </a>
        </div>
    );
}

const Actinlist: ActitemProps[] = [
    {
        titleKey: " Act-in Success Factors",
        link: "/Portal/docs/bydesign/intro",
        bg: "su",
        descKey: "actin.successFactors.desc",
    },
    {
        titleKey: " Act-in Business One Analytics",
        link: "/Portal/docs/bydesign/intro",
        bg: "bo",
        descKey: "actin.businessOne.desc",
    },
    {
        titleKey: " Act-in ByDesign",
        link: "/Portal/docs/bydesign/intro",
        /* Changed bg from "bd" to "by" to match the pattern */
        bg: "byactin",
        descKey: "actin.byDesign.desc",
    },  
    {
        titleKey: " Act-in S/4HANA Analytics",
        link: "/Portal/docs/bydesign/intro",
        bg: "hana",
        descKey: "actin.s4hana.desc",
    },
    {
        titleKey: " Act-in SAC Planning",
        link: "/Portal/docs/bydesign/intro",
        bg: "pla",
        descKey: "actin.sacPlanning.desc",
    },
];

export default function Actin() {
    return(
        <div className="container margin-bottom--lg">
            <div className={style.grid}>
               {Actinlist.map((item, index) => (
                    <Actitem key={index} {...item} />
               ))}
            </div>
        </div>
    )
}