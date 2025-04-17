import React from "react";
import Header from "../components/common/header";
import { motion } from "framer-motion";
import Statcard from "../components/common/Statcard";
import { Zap, Users, ShoppingBag, BarChart2 } from "lucide-react";
import SalesOverview from "../components/Home/SalesOverview";
import CatDisChart from "../components/Home/CatDisChart";
import ProductTable from "../products/ProductTable";

const pro = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />
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
        <ProductTable />
        <SalesOverview />
        <br />
        <CatDisChart />
      </main>
    </div>
  );
};

export default pro;
