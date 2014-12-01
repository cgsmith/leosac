#pragma once

#include <modules/BaseModule.hpp>

namespace Leosac
{
    namespace Module
    {
        /**
        * A module that provide visual feedback to the end-user about system's activity.
        *
        * @see @ref mod_monitor_main for documentation
        */
        namespace Monitor
        {
            /**
            * Main class for the monitor module.
            */
            class MonitorModule : public BaseModule
            {
            public:
                MonitorModule(zmqpp::context &ctx,
                        zmqpp::socket *pipe,
                        const boost::property_tree::ptree &cfg);
                
                MonitorModule(const MonitorModule &) = delete;
                MonitorModule(MonitorModule &&) = delete;
                MonitorModule &operator=(const MonitorModule &) = delete;
                MonitorModule &operator=(MonitorModule &&) = delete;

            private:
                /**
                * Called when a message arrives on the system bus and we
                * are configured to log that.
                */
                void log_system_bus();

                zmqpp::socket bus_;

                bool verbose_;
            };
        }
    }
}