import React, { useState } from "react";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";
import SetSec from "../settings/SetSec";

const Notification = () => {
  const [notifi, setNotifi] = useState({
    push: true,
    email: false,
    sms: true,
  });
  return (
    <SetSec icon={Bell} title={"Notifications"}>
      <ToggleSwitch
        label={"Notifications"}
        isOn={notifi.push}
        onToggle={() => setNotifi({ ...notifi, push: !notifi.push })}
      />
      <ToggleSwitch
        label={"Email Notifications"}
        isOn={notifi.email}
        onToggle={() => setNotifi({ ...notifi, email: !notifi.email })}
      />
      <ToggleSwitch
        label={"SMS Notifications"}
        isOn={notifi.sms}
        onToggle={() => setNotifi({ ...notifi, sms: !notifi.sms })}
      />
    </SetSec>
  );
};

export default Notification;
