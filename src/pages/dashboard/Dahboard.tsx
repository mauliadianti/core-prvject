import React, { useState } from "react"
import { InputModal } from "../shared-components";

export const Dashboard: React.FC = () => {
    const [isShowContactMeModal, setIsShowContactMeModal] = useState<boolean>(false);

    return (
        <>
            <div>
                <button
                    className="contact-me-modal"
                    onClick={() => setIsShowContactMeModal(true)}
                >
                    Click here
                </button>
            </div>
            {
                isShowContactMeModal && (
                    <InputModal
                        isModalOpen={isShowContactMeModal}
                        onCloseModal={() => setIsShowContactMeModal(false)}
                        onConfirm={() => setIsShowContactMeModal(false)}
                    />
                )
            }
        </>
    )
}