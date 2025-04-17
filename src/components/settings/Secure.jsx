import React, { useState } from "react";
import { Lock } from "lucide-react";
import SetSec from "./SetSec";
import ToggleSwitch from "./ToggleSwitch";

const Secure = () => {
  const [TwoFac, SetTwofac] = useState(false);

  return (
    <SetSec icon={Lock} title={"Security"}>
      <ToggleSwitch
        label={"Two factor Authentication"}
        isOn={TwoFac}
        onToggle={() => SetTwofac(!TwoFac)}
      />
      <div className="mt-4">
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200">
          Change Password
        </button>
      </div>
    </SetSec>
  );
};

export default Secure;
