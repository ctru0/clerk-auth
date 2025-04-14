"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function Home() {
	return (
		<main>
			<div className='absolute top-1/2 left-1/2 -translate-1/2 text-gray-800 flex items-center justify-center w-full flex-col gap-2'>
				<h1 className='text-5xl font-bold'>Landing Page</h1>
				<p className='mt-4 text-lg'>Click "Get Started" to log in now</p>
				<p className='text-lg'>to see the dashboard</p>
				<Link href="/dashboard" className='mt-4'>
        <Button size="lg" className="px-8 py-6 text-lg">
					Get Started
					</Button>
				</Link>
			</div>
		</main>
	);
}
