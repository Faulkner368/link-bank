using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Bookmarks;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class BookmarksController : BaseApiController
    {
        private readonly IMediator _mediator;

        public BookmarksController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Bookmark>>> GetBookmarks()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Bookmark>> GetBookmark(Guid id)
        {
            return Ok();
        }
    }
}