import CardHolder from "../atoms/CardHolder";
import ClusterLinguagens from "../molecules/SkillClusters/ClusterLinguagens";
import ClusterFerramentas from "../molecules/SkillClusters/ClusterFerramentas";
import ClusterFrameworks from "../molecules/SkillClusters/ClusterFrameworks";
import ClusterOutros from "../molecules/SkillClusters/ClusterOutros";
/**
 * @about
 * 
 *  Isso é simplesmente a parte de skills
 * @param {*} param0 
 * @returns 
 */

export default function SkillsSidebar({ darkMode }) {
    return (
        <CardHolder darkMode={darkMode}>
            <ClusterLinguagens darkMode={darkMode} />
            <ClusterFerramentas darkMode={darkMode} />
            <ClusterFrameworks darkMode={darkMode} />
            <ClusterOutros darkMode={darkMode} />
        </CardHolder>
    );
}