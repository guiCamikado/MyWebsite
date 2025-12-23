import SidebarClickOption from "../atoms/SidebarClickOption";

/**
 * Cluster de opções do sidebar
 *
 * @param {Object} props
 * @param {string} props.ClusterTitle - Título do cluster
 * @param {{ text: string, link: string }[]} props.ClusterData - Lista de opções
 * @param {boolean} props.darkMode - Define modo escuro
 */
export default function SideBarCluster({
    ClusterTitle,
    ClusterData,
    darkMode,
}) {
    return (
        <>
            <b className="text-2xl">
                {ClusterTitle ? ClusterTitle : "ClusterTitle não definido"}
            </b>

            {ClusterData && ClusterData.length > 0 ? (
                <>
                    {ClusterData.map((item, index) => (
                        <SidebarClickOption
                            key={index}
                            darkMode={darkMode}
                            text={item.text}
                            link={item.link}
                        />
                    ))}

                    <hr className="mt-2 border-white/20" />
                </>
            ) : (
                <b className="text-red-600">
                    Cluster não contém dados. Use [{`{ text, link }`}]
                </b>
            )}
        </>
    );
}
