import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { inter } from "@/styles/fonts/fonts";

const Modal = ({ id, isOpen, onClose, title, children, footerContent }: any) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const modalBodyStyle = {
        maxHeight: 'calc(95vh - 11rem)',
        overflowY: 'auto'
    } as React.CSSProperties;

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div id={id} className={`${inter.className} fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 xpl-60`}>
            <div className="relative w-full max-w-7xl p-2 bg-[#f9f9fb] xrounded-lg shadow-lg">
                <div id="modalHeader" className="modalHeader flex justify-between items-center border-b p-2">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </div>

                <div id="modalBody" style={modalBodyStyle} className="modalBody p-2 Xmax-h-96 overflow-x-hidden overflow-y-auto">
                    {children}
                </div>

                <div id="modalFooter" className="modalFooter p-2 flex justify-end space-x-2 border-t mt-1">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Close
                    </button>
                    {footerContent}
                </div>
            </div>
        </div>,
        document.body // 👈 Mount the modal in body
    );
};

export default Modal;
