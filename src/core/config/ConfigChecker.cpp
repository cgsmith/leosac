/*
    Copyright (C) 2014-2015 Islog

    This file is part of Leosac.

    Leosac is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Leosac is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

#include <tools/log.hpp>
#include "ConfigChecker.hpp"

using namespace Leosac;

void ConfigChecker::register_object(const std::string &name,
                                    const ConfigChecker::ObjectType &type)
{
    std::lock_guard<std::mutex> lg(mutex_);
    ASSERT_LOG(objects_.count(name) == 0, "Already have an object with name " << name << "registered");
    objects_[name] = type;
}

bool ConfigChecker::has_object(const std::string &name) const
{
    std::lock_guard<std::mutex> lg(mutex_);
    return objects_.count(name);
}

bool ConfigChecker::has_object(const std::string &name,
                               const ConfigChecker::ObjectType &type) const
{
    std::lock_guard<std::mutex> lg(mutex_);
    const auto itr = objects_.find(name);
    if (itr != objects_.end() && type == itr->second)
        return true;
    return false;
}