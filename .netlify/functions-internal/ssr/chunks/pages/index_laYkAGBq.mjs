import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_ShobZbIQ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                          */

const $$Astro$d = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$c = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Section;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-japy7xes> ${title && renderTemplate`<h2 data-astro-cid-japy7xes>${title}</h2>`} ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/components/section/Section.astro", void 0);

const basics = {
	name: "Ramón Ojeda",
	label: "Full Stack Developer con más de 5 años de experiencia en programación.",
	image: "/public/Screenshot.png",
	email: "reofdev1922@gmail.com",
	phone: "+(58) 04124228727",
	url: "https://johndoe.com",
	summary: "Desarrollador web Full-Stack con más de 5 años de experiencia, apasionado por crear aplicaciones web escalables y seguras. Poseo un amplio dominio en tecnologías como Java, PHP, JavaScript, Python, Spring, Laravel, Express.js, Django, Vue.js, Quasar, React, Astro, Firebase, SNS, SES, RDS de AWS y HubSpot. Acostumbrado a trabajar bajo la metodología SCRUM y con control de versiones mediante Git. Tengo un historial de éxito en la entrega de proyectos a tiempo y dentro del presupuesto. Busco un nuevo desafío donde pueda aportar mis habilidades y experiencia al éxito de un equipo.",
	location: {
		address: "",
		postalCode: "*",
		city: "Lecheria",
		countryCode: "VE",
		region: "Venezuela"
	},
	profiles: [
		{
			network: "Linkedin",
			username: "Ramón Ojeda",
			url: "https://www.linkedin.com/in/ram%C3%B3nojeda/"
		},
		{
			network: "GitHub",
			username: "reof07",
			url: "https://github.com/Reof07"
		}
	]
};
const work = [
	{
		name: "QbitsDev",
		position: "Full Stack Developer",
		url: "https://company.com",
		startDate: "2023-10-15",
		endDate: null,
		summary: "Desarrollador Full Stack, en un proyecto ERP para una empresa encargada de gestionar solicitudes de guias de movilizacion para transporte pesados. cree los endpoit de la API en laravel, asi como notificaciones en tiempo real entre otras caracteristicas.",
		highlights: [
			"Started the company"
		]
	},
	{
		name: "LanIntelligence.net",
		position: "Full Stack Developer",
		url: "https://company.com",
		startDate: "2023-04-15",
		endDate: "2023-10-30",
		summary: "Desarrollador Full Stack, en un proyecto ERP para una empresa encargada de gestionar solicitudes de guias de movilizacion para transporte pesados. cree los endpoit de la API en laravel, asi como notificaciones en tiempo real entre otras caracteristicas.",
		highlights: [
			"Started the company"
		]
	},
	{
		name: "Karanta C.A",
		position: "Backend Developer",
		url: "https://company.com",
		startDate: "2018-04-15",
		endDate: "2022-06-30",
		summary: "Desarrollador Backend con Java y PHP, en el desarrollo de microservicios para un software de gestión de producción petrolera y en el desarrollo de un sitema para gestionar inventario en almacenes en supermetanol C.A respectivamente ",
		highlights: [
			"Started the company"
		]
	}
];
const skills = [
	{
		name: "HTML",
		level: "Intermedio",
		keywords: [
			"Desarrollo Web",
			"Frontend"
		]
	},
	{
		name: "CSS",
		level: "Intermedio",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"Diseño Responsive"
		]
	},
	{
		name: "JavaScript",
		level: "Avanzado",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"Backend",
			"Fullstack"
		]
	},
	{
		name: "PHP",
		level: "Intermedio",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"Backend",
			"Fullstack"
		]
	},
	{
		name: "Python",
		level: "Intermedio",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"Backend",
			"Fullstack"
		]
	},
	{
		name: "Tailwind",
		level: "Avanzado",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"CSS Framework",
			"Diseño Responsive"
		]
	},
	{
		name: "TypeScript",
		level: "Avanzado",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"Backend",
			"JavaScript Superset"
		]
	},
	{
		name: "Node",
		level: "Intermedio",
		keywords: [
			"Desarrollo Web",
			"Backend",
			"JavaScript",
			"Servidor"
		]
	},
	{
		name: "Laravel",
		level: "Intermedio",
		keywords: [
			"Desarrollo Web",
			"Backend",
			"JavaScript",
			"Servidor"
		]
	},
	{
		name: "MySQL",
		level: "Avanzado",
		keywords: [
			"Bases de Datos",
			"SQL",
			"Almacenamiento de Datos",
			"Backend"
		]
	},
	{
		name: "Git",
		level: "Avanzado",
		keywords: [
			"Control de Versiones",
			"Colaboración",
			"Código Fuente"
		]
	},
	{
		name: "GitHub",
		level: "Avanzado",
		keywords: [
			"Control de Versiones",
			"Colaboración",
			"Código Fuente",
			"Git"
		]
	},
	{
		name: "Quasar",
		level: "Avanzado",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"React Framework",
			"SSR",
			"Static Generation"
		]
	},
	{
		name: "Vue.js",
		level: "Avanzado",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"JavaScript Library",
			"UI"
		]
	}
];

const $$Astro$b = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Experiencia laboral", "data-astro-cid-hm7leqfg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-hm7leqfg> ${work.map(({ name, position, startDate, endDate, summary }) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
    const years = `${startYear} - ${endYear}`;
    return renderTemplate`<li data-astro-cid-hm7leqfg> <article data-astro-cid-hm7leqfg> <header data-astro-cid-hm7leqfg> <div data-astro-cid-hm7leqfg> <h3 data-astro-cid-hm7leqfg>${name}</h3> <h4 data-astro-cid-hm7leqfg>${position}</h4> </div> <time data-astro-cid-hm7leqfg>${years}</time> </header> </article> <footer data-astro-cid-hm7leqfg> <p data-astro-cid-hm7leqfg>${summary}</p> </footer> </li>`;
  })} </ul> ` })} `;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/components/section/Experience.astro", void 0);

const $$Astro$a = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/icons/Mail.astro", void 0);

const $$Astro$9 = createAstro();
const $$Phone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/icons/Phone.astro", void 0);

const $$Astro$8 = createAstro();
const $$GitHub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/icons/GitHub.astro", void 0);

const $$Astro$7 = createAstro();
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/icons/LinkedIn.astro", void 0);

const $$Astro$6 = createAstro();
const $$WorldMap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$WorldMap;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path> </svg>`;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/icons/WorldMap.astro", void 0);

const $$Astro$5 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  const { name, label, email, phone, profiles, location, image } = basics;
  const { city, region } = location;
  const SOCIAL_ICONS = {
    GitHub: $$GitHub,
    LinkedIn: $$LinkedIn
  };
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-cid-txibpiox": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-txibpiox> <div class="info" data-astro-cid-txibpiox> <h1 data-astro-cid-txibpiox>${name}</h1> <h2 data-astro-cid-txibpiox>${label}</h2> <span data-astro-cid-txibpiox> ${renderComponent($$result2, "WorldMap", $$WorldMap, { "data-astro-cid-txibpiox": true })} ${city}, ${region} </span> <div class="print" data-astro-cid-txibpiox> <span data-astro-cid-txibpiox> ${email} &bull; ${phone} </span> </div> <footer class="no-print" data-astro-cid-txibpiox> ${email && renderTemplate`<a${addAttribute(`mailto:${email}`, "href")}${addAttribute(`Enviar un correo electr\xF3nico a ${name} al correo ${email}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-txibpiox> ${renderComponent($$result2, "Mail", $$Mail, { "data-astro-cid-txibpiox": true })} </a>`} ${phone && renderTemplate`<a${addAttribute(`tel:${phone}`, "href")}${addAttribute(`Llamar por tel\xE9fono a ${name} al n\xFAmero ${phone}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-txibpiox> ${renderComponent($$result2, "Phone", $$Phone, { "data-astro-cid-txibpiox": true })} </a>`} ${profiles.map(({ network, url, username }) => {
    const Icon = SOCIAL_ICONS[network];
    return renderTemplate`<a${addAttribute(url, "href")}${addAttribute(`Visitar el perfil de ${username} en ${network}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-txibpiox> ${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-txibpiox": true })} </a>`;
  })} </footer> </div> <figure class="img" data-astro-cid-txibpiox> <img${addAttribute(image, "src")} alt="" data-astro-cid-txibpiox> </figure> </div> ` })} `;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/components/section/Hero.astro", void 0);

const $$Astro$4 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$About;
  const { summary } = basics;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Sobre m\xED" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p> ${summary} </p> ` })}`;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/components/section/About.astro", void 0);

const $$Astro$3 = createAstro();
const $$Educations = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Educations;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Education" })}`;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/components/section/Educations.astro", void 0);

const $$Astro$2 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Herramientas", "data-astro-cid-pd6r4zz5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-pd6r4zz5> ${skills.map(({ name }) => {
    return renderTemplate`<li data-astro-cid-pd6r4zz5> <span data-astro-cid-pd6r4zz5>${name}</span> </li>`;
  })} </ul> ` })} `;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/components/section/Skills.astro", void 0);

const $$Astro$1 = createAstro();
const $$KeyboardManagment = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$KeyboardManagment;
  return renderTemplate`${maybeRenderHead()}<footer class="no-print" data-astro-cid-drzx5bk6>
Pulsa <kbd data-astro-cid-drzx5bk6>Ctrl</kbd> + <kbd data-astro-cid-drzx5bk6>K</kbd> para abrir la paleta de comandos.
</footer> ${renderComponent($$result, "ninja-keys", "ninja-keys", { "placeholder": "Buscar comando", "data-astro-cid-drzx5bk6": true })}  `;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/components/section/KeyboardManagment.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { name } = basics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Portafolio de ${name}`, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true })} <!-- <Projects></Projects> --> ${renderComponent($$result2, "Educations", $$Educations, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "KeyboardManager", $$KeyboardManagment, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/reof1/Documents/proyectos astro/my-portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
