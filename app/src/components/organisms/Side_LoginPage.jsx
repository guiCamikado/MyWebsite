import InputCamp from "../atoms/InputCamp"
import { Mail, Lock } from "lucide-react"

// Imagens
import BottomGif from "@/assets/images/gifs/Bottom.gif"
import CheckBox from "../atoms/CheckBox"
import DefaultButton from "../atoms/DefaultButton"
import CardLoginRegister from "../molecules/CardLoginRegister"
import Link from "../atoms/Link"

export default function LoginPage({ darkMode }) {
    return (
        <>
            <div className={`w-screen min-h-screen flex items-center justify-center ${darkMode
                ? "text-[#ffffff]"
                : "text-[#000000]"
                }`}>


                <div>

                    <CardLoginRegister
                        title={"Login"}
                        subtitle={
                            <>
                                <p>Por favor, faça login para continuar.</p>
                                <p>Caso não possua uma conta <Link darkMode={darkMode} link={"register"} text={"Clique Aqui!"} /></p>
                            </>
                        }
                        darkMode={darkMode}
                        elements={
                            <>
                                <p className="pt-20"></p>
                                <InputCamp darkmode={darkMode} placeholder={"email@example.com"} icon={<Mail />} />
                                <InputCamp darkmode={darkMode} placeholder={"Password"} type={"password"} icon={<Lock />} />
                                <p className="pt-2"></p>
                                <CheckBox placeholder={
                                    <>
                                        Li e Aceito os <Link darkMode={darkMode} link={"TermosDeUso"} text={"Termos de uso"} />.
                                    </>
                                } />

                            </>
                        } />

                </div>

            </div >
        </>
    )
}

