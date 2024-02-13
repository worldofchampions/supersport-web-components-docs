export function Features() {
	return (
		<div className="p-4 bg-neutral-800 rounded-md text-white">
			<h1 className="mb-8 text-center text-3xl font-bold ">
				This is - what we do :
			</h1>

			<ul className="grid place-content-center sm:grid-cols-2 gap-8">
				<li className="flex">
					<div className="px-4 text-5xl font-extralight ">01.</div>
					<div>
						<div className="text-xl font-bold">Research</div>
						<p className="max-w-xs py-2 text-sm">
							We love numbers! We collect data and insights, analyze them then
							take the time to learn about your objectives, ask the right
							questions to understand your business.
						</p>
					</div>
				</li>
				<li className="flex">
					<div className="px-4 text-5xl font-extralight">02.</div>
					<div>
						<div className="text-xl font-bold">Strategey</div>
						<p className="max-w-xs py-2 text-sm">
							Solutions are born from proper research, hard work, and strong
							strategy. We build data-driven roadmaps for every project to make
							pave the way to success.
						</p>
					</div>
				</li>
				<li className="flex">
					<div className="px-4 text-5xl font-extralight">03.</div>
					<div>
						<div className="text-xl font-bold">Design</div>
						<p className="max-w-xs py-2 text-sm">
							We design the right solution for your business. We craft
							beautiful, intuitive, and user-friendly interfaces that are easy
							to use and easy to maintain.
						</p>
					</div>
				</li>
				<li className="flex">
					<div className="px-4 text-5xl font-extralight">04.</div>
					<div>
						<div className="text-xl font-bold">Development</div>
						<p className="max-w-xs py-2 text-sm">
							We build the right solution for your business. We craft beautiful,
							intuitive, and user-friendly interfaces that are easy to use and
							easy to maintain.
						</p>
					</div>
				</li>
				<li className="flex">
					<div className="px-4 text-5xl font-extralight">05.</div>
					<div>
						<div className="text-xl font-bold">Deployment</div>
						<p className="max-w-xs py-2 text-sm">
							We build the right solution for your business. We craft beautiful,
							intuitive, and user-friendly interfaces that are easy to use and
							easy to maintain.
						</p>
					</div>
				</li>
			</ul>
		</div>
	);
}
