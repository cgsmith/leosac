/**
 * \file examplemoduleloader.cpp
 * \author Thibault Schueller <thibault.schueller@islog.com>
 * \brief example moduleloader class
 */

#include "examplemoduleloader.hpp"

#include "examplemodule.hpp"

ExampleModuleLoader::ExampleModuleLoader()
: AModuleLoader("ExampleModule", 0, 1, 0)
{}

ExampleModuleLoader::~ExampleModuleLoader() {}

IModule* ExampleModuleLoader::instanciateModule() const
{
    return (new ExampleModule);
}
