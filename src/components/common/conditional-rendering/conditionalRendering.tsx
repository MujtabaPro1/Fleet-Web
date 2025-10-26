import React , { useState, useEffect } from 'react'

export default function ConditionalRendering() {
    {/* Conditional Rendering */}
        const [mobile, setMobile] = useState(() => {
            if (typeof window === 'undefined') return false
            return window.innerWidth < 576
        });
        useEffect(() => {
            const updateMobile = () => {
                setMobile(window.innerWidth < 767 ? true : false);
            }
            updateMobile()
                window.addEventListener('resize', updateMobile)
            return () => {
                window.removeEventListener('resize', updateMobile)
            }
        }, [])
    {/* Conditional Rendering */}
    return (
        <> 
			{ typeof mobile !== 'undefined' ? (
				mobile ? (
					<div className="mobile">Mobile</div>
				) : (
					<div className="desktop">desktop</div>
				)
			) : null
			}
        </>
    )
}