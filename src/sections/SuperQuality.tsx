import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../Components/Button";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="  font-palanquin  text-4xl capitalize  font-bold lg:max-w-lg">
          We provide you <span className="text-coral-red">Super</span>
          <span className="text-coral-red"> quality</span> shoes
          <br />
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">We don't offer the latest from Nike and Jordan to just anyone. When
          you're a Member, you could get special access to the newest releases. If
          you see "Member product" pop up, you're in the right spot.</p>
        <div className="mt-11">
          <Button label="View details" iconURL="" />
        </div>
      </div>
      <div className=" flex-1 flex justify-center items-center ">
        <img
          src={shoe8}
          alt="shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality;