type ExternalLinkProps = {
	href: string;
	children: React.ReactNode;
};

export function ExternalLink({ href, children }: ExternalLinkProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
		>
			{children}
		</a>
	);
}
