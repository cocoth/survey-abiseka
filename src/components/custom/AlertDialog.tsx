"use client"
import { useEffect, useRef } from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'

interface AlertDialogProps {
    onClose: () => void
    title: string
    description: string
    action: () => void
    actionLabel?: string
    cancelLabel?: string
}

const AlertDialog = ({ action, actionLabel, title, description, cancelLabel, onClose }: AlertDialogProps) => {
    const dialogRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [onClose])

    return (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-50">
            <Card
                ref={dialogRef}
                className='fixed top-3 left-1/2 -translate-x-1/2 transition-all transform w-full max-w-sm p-4 bg-white shadow-md rounded-lg animate-fade-in'
            >
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-lg font-semibold'>
                        {title}
                    </h2>
                    <p className='text-sm text-gray-600'>
                        {description}
                    </p>
                    <div className='grid grid-cols-2 justify-between w-full mt-4 gap-10'>
                        <Button
                            className='px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer'
                            onClick={onClose}
                        >
                            {cancelLabel || 'Cancel'}
                        </Button>
                        <Button
                            className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer'
                            onClick={() => {
                                action()
                                onClose()
                            }}
                        >
                            {actionLabel || 'Confirm'}
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default AlertDialog