import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";

const config: DocsThemeConfig = {
	logo: (
		<>
			<img
				src="/supersport-logo.webp"
				alt="SuperSport"
				style={{ height: "40px" }}
			/>
			<span style={{ marginLeft: "12px", fontWeight: 800 }}>
				Web Components
			</span>
		</>
	),
	head: function useHead() {
		const { title } = useConfig();
		// const { route } = useRouter();
		const socialCard =
			"https://images.supersport.com/media/2j0juoxo/ss-placeholder.png?width=400&quality=90&format=webp";

		return (
			<>
				<meta name="msapplication-TileColor" content="#000" />
				<meta name="theme-color" content="#000" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="Content-Language" content="en" />
				<meta
					name="description"
					content="SuperSport Web Components Documentation"
				/>
				<meta
					name="og:description"
					content="Make beautiful websites with Next.js & MDX."
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content={socialCard} />
				<meta name="twitter:site:domain" content="nextra.site" />
				<meta name="twitter:url" content="https://nextra.site" />
				<meta
					name="og:title"
					content={title ? title + " – Nextra" : "Nextra"}
				/>
				<meta name="og:image" content={socialCard} />
				<meta name="apple-mobile-web-app-title" content="Nextra" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="icon" href="/favicon.png" type="image/png" />
				<link
					rel="icon"
					href="/favicon-dark.svg"
					type="image/svg+xml"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="icon"
					href="/favicon-dark.png"
					type="image/png"
					media="(prefers-color-scheme: dark)"
				/>
			</>
		);
	},
	editLink: {
		text: "Edit this page on GitHub →",
	},
	feedback: {
		content: "Question? Give us feedback →",
		labels: "feedback",
	},
	sidebar: {
		titleComponent({ title, type }) {
			if (type === "separator") {
				return <span className="cursor-default">{title}</span>;
			}
			return <>{title}</>;
		},
		defaultMenuCollapseLevel: 1,
		toggleButton: true,
	},
	project: {
		link: "https://github.com/worldofchampions/supersport-web-components-docs",
	},
	chat: {},
	docsRepositoryBase:
		"https://github.com/worldofchampions/supersport-web-components-docs",
	footer: {
		text: (
			<span>
				SuperSport {new Date().getFullYear()} ©{" "}
				<a href="https://supersport.com" target="_blank">
					SuperSport
				</a>
			</span>
		),
	},
	toc: {
		backToTop: true,
	},
	gitTimestamp: function GitTimestamp({ timestamp }) {
		const { locale } = useRouter();
		return (
			<>
				Last updated on{" "}
				<time dateTime={timestamp.toISOString()}>
					{timestamp.toLocaleDateString(locale, {
						day: "numeric",
						month: "long",
						year: "numeric",
					})}
				</time>
			</>
		);
	},
};

export default config;
