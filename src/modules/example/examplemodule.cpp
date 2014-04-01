/**
 * \file examplemodule.cpp
 * \author Thibault Schueller <thibault.schueller@islog.com>
 * \brief example module class
 */

#include "examplemodule.hpp"

#include <iostream>

ExampleModule::ExampleModule() {}

ExampleModule::~ExampleModule() {}

ExampleModule::ExampleModule(const ExampleModule& /*other*/) {}

ExampleModule& ExampleModule::operator=(const ExampleModule& /*other*/)
{
    return (*this);
}

void ExampleModule::sayHello() const
{
    std::cout << "Hello :D" << std::endl;
}
