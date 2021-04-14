using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Bookmarks;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BookmarksController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Bookmark>>> GetBookmarks()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBookmark(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateBookmark(Bookmark bookmark)
        {
            return HandleResult(await Mediator.Send(new Create.Command {Bookmark = bookmark}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBookmark(Guid id, Bookmark bookmark)
        {
            bookmark.Id = id;

            return HandleResult(await Mediator.Send(new Edit.Command { Bookmark = bookmark}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookmark(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command {Id = id}));
        }
    }
}