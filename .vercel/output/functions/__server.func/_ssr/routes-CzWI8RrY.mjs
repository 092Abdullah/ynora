import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, c as Facebook, d as ArrowUpRight, f as ArrowRight, i as Pentagon, l as Crosshair, n as Twitter, o as Linkedin, p as ArrowLeft, s as Instagram, t as X, u as Check } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CzWI8RrY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Cta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden bg-paper py-16 sm:py-24 lg:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute top-10 left-8 hidden h-16 w-16 border-t-2 border-l-2 border-ink/15 md:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-8 bottom-10 hidden h-16 w-16 border-r-2 border-b-2 border-ink/15 md:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 32 32",
				className: "pointer-events-none absolute top-1/2 left-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] sm:h-[280px] sm:w-[280px] lg:h-[420px] lg:w-[420px]",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M16 3.2 28.4 16 16 28.8 3.6 16 16 3.2Z",
					fill: "#171717"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M16 3.2 28.4 16 16 16 16 3.2Z",
					fill: "#FF762A"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8 flex justify-center sm:mb-10 md:justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-left md:text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex -space-x-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/avatars.jpg",
									alt: "",
									className: "size-8 rounded-full object-cover object-[18%_center] ring-2 ring-paper"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/avatars.jpg",
									alt: "",
									className: "size-8 rounded-full object-cover object-center ring-2 ring-paper"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/david.jpg",
									alt: "",
									className: "size-8 rounded-full object-cover ring-2 ring-paper"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold leading-none text-ink",
							children: "3K+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-[18ch] text-[10px] font-semibold tracking-[0.14em] text-ink/50 uppercase",
							children: "Creating intelligence that drives real results"
						})] })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker mb-5 text-ink/50",
							children: "Start your AI journey today"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "connect-display text-ink",
							children: "Connect"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-lg font-medium tracking-[0.18em] text-ink/70 uppercase sm:text-2xl",
							children: "with us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink/50",
							children: "Kickstart your AI journey with expert guidance, tailored strategies, and transformative results designed for your success."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:hello@ynora.ai",
							className: "mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-snow shadow-[0_10px_28px_rgba(255,118,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-hot",
							children: ["Contact Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})
					]
				})]
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Logo({ className, markClassName, wordmark = true, invert = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#top",
		className: cn("group inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 32 32",
			className: cn("size-7 transition-transform duration-300 group-hover:rotate-12", markClassName),
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 3.2 28.4 16 16 28.8 3.6 16 16 3.2Z",
				fill: invert ? "#fff" : "#171717"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 3.2 28.4 16 16 16 16 3.2Z",
				fill: "#FF762A"
			})]
		}), wordmark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("text-[1.35rem] font-semibold tracking-tight lowercase", invert ? "text-snow" : "text-ink"),
			children: "ynora"
		}) : null]
	});
}
var NAV = [
	{
		href: "#top",
		label: "Home"
	},
	{
		href: "#who",
		label: "About"
	},
	{
		href: "#why",
		label: "Services"
	},
	{
		href: "#pricing",
		label: "Projects"
	},
	{
		href: "#why",
		label: "Articles"
	},
	{
		href: "#contact",
		label: "Compliance"
	}
];
function SiteFooter() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-snow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-white/10 px-5 py-12 sm:px-6 lg:col-span-7 lg:border-r lg:px-12 lg:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						invert: true,
						markClassName: "size-9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-xs text-[11px] font-semibold tracking-[0.14em] text-muted uppercase",
						children: "Empowering businesses with smarter automation, built for growth and simplicity."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex gap-2 text-muted",
						children: [
							{
								Icon: Facebook,
								label: "Facebook"
							},
							{
								Icon: Twitter,
								label: "Twitter"
							},
							{
								Icon: Linkedin,
								label: "LinkedIn"
							},
							{
								Icon: Instagram,
								label: "Instagram"
							}
						].map(({ Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							"aria-label": label,
							className: "flex size-11 items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:text-orange",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[18px]" })
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "mt-10 flex w-full max-w-md flex-col gap-2 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							autoComplete: "email",
							name: "email",
							placeholder: "Enter your email",
							className: "min-h-11 min-w-0 flex-1 rounded-full border border-white/15 bg-transparent px-4 py-2.5 text-sm text-snow outline-none placeholder:text-muted focus:border-orange"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "min-h-11 rounded-full bg-snow px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-orange hover:text-snow",
							children: sent ? "Joined" : "Submit"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "px-5 py-4 sm:px-6 lg:col-span-5 lg:px-0 lg:py-0",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: item.href,
					className: "flex min-h-12 items-center justify-between border-b border-white/10 px-2 py-4 text-xs font-semibold tracking-[0.2em] text-muted uppercase transition-all duration-200 hover:translate-x-1 hover:text-orange sm:px-8 lg:py-5",
					children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
				}, item.label))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "border-t border-white/10 px-5 py-5 text-center text-[11px] text-muted",
			children: "Copyright © 2026 | Published by Qudra Team · Powered by Qudra."
		})]
	});
}
var LINKS = [
	{
		href: "#who",
		label: "About"
	},
	{
		href: "#why",
		label: "Why us"
	},
	{
		href: "#pricing",
		label: "Pricing"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative z-50 bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-6 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "absolute left-1/2 hidden min-h-11 -translate-x-1/2 items-center text-[11px] font-semibold tracking-[0.22em] text-ink/80 transition-colors hover:text-orange md:flex",
					children: "CONTACT"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex min-h-11 min-w-11 items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-ink transition-opacity hover:opacity-70",
					onClick: () => setOpen((v) => !v),
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					children: ["MENU", open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
						className: "size-4",
						strokeWidth: 2.2
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-0 top-full z-50 border-t border-ink/10 bg-ink text-snow shadow-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-[1440px] flex-col px-5 py-4 sm:px-6 lg:px-12",
				children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "flex min-h-12 items-center justify-between border-b border-white/10 py-4 text-sm font-semibold tracking-[0.18em] uppercase transition-colors hover:text-orange",
					children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
				}, l.href))
			})
		}) : null]
	});
}
function WorkBtn({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#contact",
		className: cn("inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-[13px] font-semibold text-snow shadow-[0_8px_20px_rgba(255,118,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-hot hover:shadow-[0_12px_28px_rgba(255,118,42,0.45)]", className),
		children: ["Work with us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
			className: "size-3.5",
			strokeWidth: 2.6
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "v-label absolute top-[20%] left-6 hidden lg:block",
				style: {
					writingMode: "vertical-rl",
					transform: "rotate(180deg)"
				},
				children: [
					"Continuous",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Maintenance &",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Enterprise Security"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "v-label absolute top-[16%] right-6 hidden lg:block",
				style: { writingMode: "vertical-rl" },
				children: [
					"AI Consulting &",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Strategic Roadmaps",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-12 block",
						children: [
							"System Integration &",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Cloud Architecture"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto flex max-w-[1440px] justify-center px-4 pt-8 sm:pt-12 lg:pt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex max-w-full flex-col items-stretch",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "hero-display text-center text-ink",
							children: [
								"EMP",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative mx-[0.01em] inline-flex h-[0.78em] w-[0.78em] translate-y-[0.03em] items-center justify-center align-middle",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/sphere.jpg",
										alt: "",
										className: "size-full rounded-full object-cover transition-transform duration-500 hover:rotate-12 hover:scale-105"
									})
								}),
								"WERING"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkBtn, { className: "mx-auto mt-5 mb-3 lg:hidden" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-center justify-center lg:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkBtn, { className: "hidden lg:inline-flex" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "hero-display text-ink",
								children: [
									"TO",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative mx-[0.1em] inline-flex h-[0.7em] w-[0.7em] translate-y-[0.06em] items-center justify-center overflow-hidden rounded-[16%] align-middle",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/images/hex.jpg",
											alt: "",
											className: "size-[140%] max-w-none object-cover mix-blend-multiply transition-transform duration-500 hover:rotate-6 hover:scale-110"
										})
									}),
									"EVOLVE"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "hero-display mt-1 text-center text-orange",
							children: [
								"SMAR",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative mx-[0.03em] inline-flex h-[0.7em] w-[0.7em] translate-y-[0.05em] items-center justify-center rounded-[16%] bg-orange align-middle text-ink shadow-[0_10px_24px_rgba(255,118,42,0.35)] transition-transform duration-300 hover:scale-110 hover:rotate-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										className: "size-[55%]",
										strokeWidth: 2.8
									})
								}),
								"TER"
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-5 h-[150px] w-full overflow-hidden sm:h-[240px] lg:mt-6 lg:h-[330px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/wave.jpg",
					alt: "",
					className: "h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-out hover:scale-105"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-paper to-transparent" })]
			})
		]
	});
}
function Pricing() {
	const [monthly, setMonthly] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "bg-ink py-14 text-snow lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-orange" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker text-muted",
						children: "Price"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-md",
					children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block bg-orange px-2 py-[0.08em] text-snow",
						children: "Pricing"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-fit items-center rounded-full bg-ink-2 p-1 text-xs font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMonthly(false),
						className: cn("min-h-10 rounded-full px-4 py-1.5 transition-colors", !monthly ? "bg-snow text-ink" : "text-muted hover:text-snow"),
						children: "Per Project"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMonthly(true),
						className: cn("min-h-10 rounded-full px-4 py-1.5 transition-colors", monthly ? "bg-snow text-ink" : "text-muted hover:text-snow"),
						children: "Monthly"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-white/8 bg-ink-2 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange/50 sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "AI Strategy & Consulting"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Boost performance with bespoke AI models"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-3 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-0.5 size-4 shrink-0 text-orange" }), "Predictive analytics & automation"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-0.5 size-4 shrink-0 text-orange" }), "NLP & data intelligence"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-3 sm:mt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-bold",
								children: monthly ? "$1,320" : "$8,400"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "switch",
								"aria-checked": monthly,
								onClick: () => setMonthly((v) => !v),
								className: cn("relative h-6 w-11 rounded-full transition-colors", monthly ? "bg-orange" : "bg-white/15"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-0.5 left-0.5 size-5 rounded-full bg-snow transition-transform", monthly && "translate-x-5") })
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col rounded-2xl border border-white/8 bg-ink-2 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange/50 sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-baseline gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl font-bold",
								children: monthly ? "$2,299" : "$14,900"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: monthly ? "/monthly" : "/project"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex-1 space-y-3 text-sm text-muted",
							children: [
								"Tailored AI roadmap aligned with your goals",
								"Discovery workshops & strategy sessions",
								"Industry-specific insights",
								"Ongoing advisory support"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-0.5 size-4 shrink-0 text-orange" }), item]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col items-stretch gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: ["Delivery Time: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-snow",
									children: "2-3 weeks"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-snow transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-hot hover:shadow-[0_10px_24px_rgba(255,118,42,0.4)]",
								children: ["Get Started", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})]
						})
					]
				})]
			})]
		})
	});
}
function WhoWeAre() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "who",
		className: "bg-ink text-snow",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2 border-white/10 px-5 pt-10 sm:px-6 lg:border-r lg:px-8 lg:pt-14 xl:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-orange" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker text-muted",
						children: "Who we are"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden border-r border-white/10 lg:block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 pt-5 sm:px-6 lg:col-span-2 lg:px-10 lg:pt-14 lg:pr-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-1.5 inline-block bg-orange px-1.5 py-[0.06em] leading-none text-snow",
							children: "Dedicated"
						}), "to AI, we build solutions that transform workflows and accelerate success"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-white/10 px-5 py-6 sm:px-6 lg:border-r lg:px-8 lg:py-10 xl:px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group h-full rounded-xl bg-ink-2 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-8 flex size-11 items-center justify-center rounded-md border border-white/12 text-muted transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-snow lg:mb-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pentagon, {
									className: "size-5",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "section-kicker mb-3 text-snow",
								children: "Mechanization"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] leading-relaxed text-muted",
								children: "We design AI-driven systems that automate repetitive tasks, freeing your team to focus on creativity, strategy, and high-value work."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-white/10 px-5 pb-6 sm:px-6 lg:border-r lg:px-8 lg:py-10 xl:px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group h-full rounded-xl bg-ink-2 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-8 flex size-11 items-center justify-center rounded-md border border-white/12 text-muted transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-snow lg:mb-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, {
									className: "size-5",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "section-kicker mb-3 text-snow",
								children: "Intelligence"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] leading-relaxed text-muted",
								children: "Our AI analyzes data in real time to deliver actionable insights—helping your business anticipate trends and make smarter decisions."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 pb-10 sm:px-6 lg:col-span-2 lg:px-8 lg:py-10 xl:px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "group h-full min-h-[200px] overflow-hidden rounded-xl sm:min-h-[240px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/particles.jpg",
							alt: "Neural particle field",
							className: "h-full min-h-[200px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:min-h-[240px]"
						})
					})
				})
			]
		})
	});
}
var QUOTES = [{
	text: "Partnering with Synora changed everything. Their vision and execution reshaped our entire digital strategy.",
	name: "David Acklicknez",
	role: "Marketing Director",
	photo: "/images/david.jpg"
}, {
	text: "Ynora didn’t just install models — they rebuilt how our team decides. The roadmap paid for itself in a quarter.",
	name: "Amelia Chen",
	role: "Head of Operations",
	photo: "/images/avatars.jpg"
}];
function WhyChooseUs() {
	const [i, setI] = (0, import_react.useState)(0);
	const q = QUOTES[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "bg-paper py-14 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 grid grid-cols-1 items-start gap-4 lg:mb-14 lg:grid-cols-12 lg:gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 lg:col-span-4 lg:pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-orange" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker text-ink/55",
						children: "Why choose us"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-md text-ink lg:col-span-8",
					children: [
						"Building",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block bg-orange px-1.5 py-[0.06em] leading-none text-snow",
							children: "AI solutions"
						}),
						" ",
						"that",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
						" work in real life"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-1 flex-col rounded-2xl bg-snow p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex-1 text-[15px] leading-relaxed text-ink/80",
								children: [
									"“",
									q.text,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: q.photo,
										alt: q.name,
										className: "size-10 rounded-full object-cover object-top"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-ink",
											children: q.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-ink/45",
											children: q.role
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "ml-auto flex gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "flex size-11 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:bg-ink hover:text-snow md:size-7",
											onClick: () => setI((v) => v === 0 ? QUOTES.length - 1 : v - 1),
											"aria-label": "Previous quote",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "flex size-11 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:bg-ink hover:text-snow md:size-7",
											onClick: () => setI((v) => (v + 1) % QUOTES.length),
											"aria-label": "Next quote",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })
										})]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-2xl bg-ink px-5 py-4 text-snow transition-transform duration-300 hover:scale-[1.02]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex -space-x-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/avatars.jpg",
										alt: "",
										className: "size-8 rounded-full object-cover object-[18%_center] ring-2 ring-ink"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/avatars.jpg",
										alt: "",
										className: "size-8 rounded-full object-cover object-center ring-2 ring-ink"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/avatars.jpg",
										alt: "",
										className: "size-8 rounded-full object-cover object-[82%_center] ring-2 ring-ink"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl font-bold leading-none",
								children: "3K+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] text-muted",
								children: "Happy customers"
							})] })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[320px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/vr.jpg",
							alt: "Specialist in a VR headset",
							className: "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/90 via-ink/55 to-transparent px-5 pb-5 pt-16 text-snow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-bold leading-none",
								children: "83%"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] text-muted",
								children: "Customer Satisfaction Rate"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-9 items-center justify-center rounded-full border border-orange/50 text-orange",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-4",
									strokeWidth: 2.4
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col rounded-2xl bg-snow p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-ink",
								children: "Verified Expertise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 flex-1 text-sm leading-relaxed text-ink/65",
								children: "We combine deep technical knowledge with creative strategy to deliver AI solutions that drive measurable business impact."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#who",
								className: "mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-snow transition-colors hover:bg-orange",
								children: ["More about us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex -space-x-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/vr.jpg",
										alt: "",
										className: "size-16 rounded-lg object-cover ring-2 ring-snow transition-transform duration-300 hover:-translate-y-1 hover:z-10"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/particles.jpg",
										alt: "",
										className: "size-16 rounded-lg object-cover ring-2 ring-snow transition-transform duration-300 hover:-translate-y-1 hover:z-10"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/david.jpg",
										alt: "",
										className: "size-16 rounded-lg object-cover ring-2 ring-snow transition-transform duration-300 hover:-translate-y-1 hover:z-10"
									})
								]
							})
						]
					})
				]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen overflow-x-hidden bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhoWeAre, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
