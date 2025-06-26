import { ProjectsList } from "../types/content";
import BrandLink from "@/app/comp/brand-comp/brand-link";
export const projects: ProjectsList = {
  ImpactPage: [
    {
      id: "mac",
      contents: [
        {
          title: "MAC Classes",
          image: {
            src: "/img/about/impact/mac/mac1.png",
            alt: "MAC Classes",
            width: 623,
            height: 427,
          },
          children: (
            <div className="flex flex-col items-start">
              MAC Classes is more than just an institute — it is a safe space
              for learning, growth, and opportunity. Built under the guidance of
              Vrinda Welfare Society, it was founded with a single vision:
              <div className="caption">
                To ensure that no child is denied quality education due to
                financial limitations.{" "}
              </div>
              We provide education at a high standard and an affordable cost,
              ensuring that every parent — regardless of income — can support
              their child’s learning journey.
            </div>
          ),
        },
        {
          title: "",
          image: {
            src: "/img/about/impact/mac/mac2.png",
            alt: "MAC Classes",
            width: 818,
            height: 460,
          },
          children: (
            <>
              <span className="font-bold">We focus on:</span>
              <ul className="list-disc pl-[1.5rem]">
                <li> Academic support from foundational to senior classes</li>
                <li>
                  {" "}
                  Regular assessments, doubt-solving, and personalized guidance
                </li>
                <li>
                  {" "}
                  Student-friendly teaching methods for deeper understanding
                  Inclusive
                </li>
                <li>learning for students from all financial backgrounds</li>
              </ul>
            </>
          ),
        },
        {
          title: "",
          image: {
            src: "/img/about/impact/mac/logo.png",
            alt: "logo",
            width: 459,
            height: 384,
          },
          children: (
            <>
              MAC Classes is a testament to the power of education and the
              strength of the community. We are proud to have a team of
              dedicated and committed individuals who are passionate about
              making a difference in the lives of children.
            </>
          ),
        },

        {
          children: (
            <div>
              <BrandLink
                text="Know More"
                path="/projects/mac"
                className="hover:brand-primary transform scale-115 hover:scale-120 transition-all duration-300 ease-in-out"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: "skill-development",
      contents: [
        {
          title: "💻 Skill Development",
          image: {
            src: "/img/about/3.png",
            alt: "Skill Development",
            width: 623,
            height: 427,
          },
          children: (
            <>
              <div>
                At Vrinda Welfare Society, we recognize that success in life
                depends not only on school marks, but also on real-world skills.
                That’s why we offer:
              </div>
            </>
          ),
        },
        {
          image: {
            src: "/img/about/2.png",
            alt: "Skill Development",
            width: 623,
            height: 427,
          },
          children: (
            <>
              <ul className="list-disc pl-[1.5rem] space-y-[0.2rem] mt-[0.7rem]">
                <li>
                  {" "}
                  Basic computer education and digital literacy programs{" "}
                </li>
                <li>
                  Vocational training in areas like tailoring, crafts, spoken
                  English, and more{" "}
                </li>
                <li>
                  Workshops on public speaking, creative thinking, and
                  communication{" "}
                </li>
                <li>Career guidance and soft-skills sessions for youth</li>
              </ul>
            </>
          ),
        },
        {
          children: (
            <div>
              <BrandLink
                text="Know More"
                path="/projects/skill-development"
                className=" hover:brand-primary transform scale-115 hover:scale-120 transition-all duration-300 ease-in-out"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: "library",
      contents: [
        {
          title: "📚 Community Library",
          image: {
            src: "/img/about/impact/library/library1.png",
            alt: "Library",
            width: 623,
            height: 427,
          },
          children: (
            <div className="flex flex-col items-start">
              {/* Our library is a treasure trove of knowledge, offering a wide
              range of books, magazines, and digital resources. It serves as a
              quiet space for students to study, research, and explore new
              ideas. We also organize reading sessions, book clubs, and
              educational workshops to foster a love for reading and learning
              among children and youth. */}
              Our library and reading room initiative supports students who lack
              a quiet space or access to books and study materials at home.
            </div>
          ),
        },
        {
          image: {
            src: "/img/about/impact/library/library1.png",
            alt: "Library",
            width: 623,
            height: 427,
          },
          children: (
            <>
              {" "}
              <ul className="list-disc pl-[1.5rem] space-y-[0.2rem] mt-[0.7rem]">
                <li>
                  {" "}
                  A growing collection of academic, reference, and motivational
                  books
                </li>
                <li>
                  A quiet, distraction-free reading room for focused self-study
                </li>
                <li>Free access to all students from the community</li>
                <li>Resources and stationery support for those in need</li>
              </ul>
            </>
          ),
        },

        {
          children: (
            <div>
              <BrandLink
                text="Know More"
                path="/projects/library"
                className="hover:brand-primary transform scale-115 hover:scale-120 transition-all duration-300 ease-in-out"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: "olympiad",
      contents: [
        {
          title: "🏆 Olympiads",
          image: {
            src: "/img/about/impact/olympiad/olympiad1.png",
            alt: "png",
            width: 100,
            height: 100,
          },
          children: (
            <div className="flex flex-col items-start">
              olympiad is our flagship initiative that aims to provide children
              with access to quality education and resources. olympiad
              Olympiads, we conduct various educational programs, workshops, and
              competitions that inspire children to excel in academics and
              develop a passion for learning. Our olympiad program includes:
            </div>
          ),
        },
        {
          image: {
            src: "/img/about/impact/olympiad/olympiad2.png",
            alt: "png",
            width: 100,
            height: 100,
          },
          children: (
            <>
              <ul className="list-disc pl-[1.5rem] space-y-[0.2rem] mt-[0.7rem]">
                <li>
                  {" "}
                  Olympiad exams in subjects like Math, Science, and English{" "}
                </li>
                <li>
                  {" "}
                  Workshops on critical thinking, problem-solving, and
                  creativity{" "}
                </li>
                <li>
                  {" "}
                  Mentorship programs connecting students with industry experts{" "}
                </li>
                <li> Scholarships and awards for outstanding performers </li>
              </ul>
            </>
          ),
        },
        {
          children: (
            <div>
              <BrandLink
                text="Know More"
                path="/projects/olympiad"
                className="hover:brand-primary transform scale-115 hover:scale-120 transition-all duration-300 ease-in-out"
              />
            </div>
          ),
        },
      ],
    },
  ],
};
