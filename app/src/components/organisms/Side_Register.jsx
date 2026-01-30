import InputCamp from "../atoms/InputCamp"
import { Mail, Lock, User } from "lucide-react"

// Imagens
import BottomGif from "@/assets/images/gifs/Bottom.gif"
import CheckBox from "../atoms/CheckBox"
import DefaultButton from "../atoms/DefaultButton"
import CardLoginRegister from "../molecules/CardLoginRegister"
import Link from "../atoms/Link"

export default function RegisterPage({ darkMode }) {
    return (
        <>
            <div className={`w-screen min-h-screen flex items-center justify-center ${darkMode
                ? "text-[#ffffff]"
                : "text-[#000000]"
                }`}>


                <div>

                    <CardLoginRegister
                        title={"Criar Conta"}
                        subtitle={
                            <>
                                <p>Cadastrar nova conta.</p>
                            </>
                        }
                        darkMode={darkMode}
                        elements={
                            <>
                                <p className="pt-10"></p>
                                <InputCamp darkmode={darkMode} placeholder={"* email@example.com"} icon={<Mail />} />
                                <InputCamp darkmode={darkMode} placeholder={"* Password"} type={"password"} icon={<Lock />} />
                                <InputCamp darkmode={darkMode} placeholder={"* Confirm Password"} type={"password"} icon={<Lock />} />
                                <p className="mt-5"></p>
                                <InputCamp darkmode={darkMode} placeholder={"* Name"} iconClass={"size-0.5 mt-15"} icon={<User />} />
                                <InputCamp darkmode={darkMode} placeholder={"* Last Name"} icon={""} />
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

