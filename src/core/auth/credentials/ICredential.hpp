/*
    Copyright (C) 2014-2016 Islog

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

#pragma once

#include "core/auth/AuthFwd.hpp"
#include <memory>

namespace Leosac
{
namespace Auth
{
/**
 * Base interface for credential objects.
 */
class ICredential
{
  public:
    /**
     * Retrieve the owner of the credential.
     */
    virtual UserLPtr owner() = 0;

    /**
     * Set a new owner for the credential.
     */
    virtual void owner(UserPtr) = 0;
};
}
}