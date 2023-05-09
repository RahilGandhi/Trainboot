import { BsArrowRight } from "react-icons/bs";

const TrainingCards = () => {
  return (
    <section className="py-10 text-white">
      <div className="text-center">
        <h1 className="text-white text-4xl mb-8 font-semibold">
          Choose the traning you want to provide
        </h1>
        <p className="text-gray-300 text-xl my-0 mx-auto max-w-[28rem] mb-8">
          A Employee Training and On-Boarding platform for your organization and
          employees
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <article className="flex h-[215px] items-center gap-x-6 border rounded-3xl border-[#787878] px-8">
          <img src="/images/content/img1.png" alt="" />
          <div className="flex flex-col gap-y-2">
            <h1 className="text-xl">Video Content</h1>
            <p className="pr-2">Get curated content video as per job roles.</p>
            <button className="flex items-center gap-x-2">
              Learn more <BsArrowRight />{" "}
            </button>
          </div>
        </article>
        <article className="flex h-[215px] items-center gap-x-6 border rounded-3xl border-[#787878] px-8">
          <img src="/images/content/img2.png" alt="" />
          <div className="flex flex-col gap-y-2">
            <h1 className="text-xl">Controlled Content</h1>
            <p className="pr-2">
              Organization's developed content and instructors.
            </p>
            <button className="flex items-center gap-x-2">
              Learn more <BsArrowRight />{" "}
            </button>
          </div>
        </article>
        <article className="flex h-[215px] items-center gap-x-6 border rounded-3xl border-[#787878] px-8">
          <img src="/images/content/img3.png" alt="" />
          <div className="flex flex-col gap-y-2">
            <h1 className="text-xl">Instructor Led</h1>
            <p className="pr-2">Instructor overview to ensure completion.</p>
            <button className="flex items-center gap-x-2">
              Learn more <BsArrowRight />{" "}
            </button>
          </div>
        </article>
        <article className="flex h-[215px] items-center gap-x-6 border rounded-3xl border-[#787878] px-8">
          <img src="/images/content/img4.png" alt="" />
          <div className="flex flex-col gap-y-2">
            <h1 className="text-xl">Free Tier</h1>
            <p className="pr-2">
              Train your first 50 employees free on our platform.
            </p>
            <button className="flex items-center gap-x-2">
              Learn more <BsArrowRight />{" "}
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TrainingCards;
