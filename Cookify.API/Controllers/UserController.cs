﻿using Cookify.API.Models.Requests;
using Cookify.API.Services.Users;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cookify.API.Controllers
{
    [ApiController]
    [Route("/api/user/[action]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _usersService;

        public UserController(IUserService usersService)
        {
            _usersService = usersService;
        }

        [HttpGet]
        public IActionResult Test()
        {
            return Ok("test");
        }

        [HttpPost]
        public async Task<IActionResult> RegisterUser([FromBody] AddUserRequest request)
        {
            if (request == null || !request.IsValid)
            {
                return BadRequest();
            }


            var result = await _usersService.RegisterUser(request);

            return result.IsSuccess ? Ok(result.Data) : StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}
