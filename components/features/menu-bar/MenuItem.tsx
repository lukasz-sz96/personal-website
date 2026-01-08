"use client"

import { motion } from 'motion/react'
interface MenuItemProps {
    title: string
    url: string
    active?: boolean
}

export const MenuItem = ({ title, url, active }: MenuItemProps) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        className={`rounded-2xl hover:bg-warm-200/20 px-3 py-1 text-gray-300 cursor-pointer ${active && 'bg-warm-200 text-black'}`}
    >
        {title}
    </motion.button>
)
