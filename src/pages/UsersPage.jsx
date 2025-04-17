import React from "react";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";
import { Zap, Users, ShoppingBag, BarChart2 } from "lucide-react";

import Header from "../components/common/header";
import Statcard from "../components/common/Statcard";
import UsersTable from "../components/users/UsersTable";
// import UserGrowthChart from "../components/users/UserGrowthChart";
// import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
// import UserDemographicsChart from "../components/users/UserDemographicsChart";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 py-4 lg:px-8 xl:px-8">
        <motion.div
          className="grid grid-col-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Statcard
            name="Total Sales"
            icon={Zap}
            value="$12,355"
            color="#6366f1"
          />
          <Statcard
            name="New Users"
            icon={Users}
            value="1,234"
            color="#8B5CF6"
          />
          <Statcard
            name="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#EC4899"
          />
          <Statcard
            name="Conversion Rate"
            icon={BarChart2}
            value="12.5%"
            color="#10B981"
          />
        </motion.div>
        <br />
        <UsersTable />
      </main>
    </div>
  );
};

export default UsersPage;
