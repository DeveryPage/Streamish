using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Streamish.Models;
using Streamish.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Streamish.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _upRepo;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _upRepo = userProfileRepository;
        }

        [HttpGet("GetByIdWithVideos")]
        public IActionResult GetByIdWithVideos(int id)
        {
            UserProfile up = _upRepo.GetByIdWithVideos(id);
            if (up == null)
            {
                return NotFound();
            }
            return Ok(up);
        }
    }
}
