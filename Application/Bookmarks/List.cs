using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Application.Core;
using Application.Interfaces;
using System;
using System.Linq;

namespace Application.Bookmarks
{
    public class List
    {
        public class Query : IRequest<Result<List<Bookmark>>>
        {

        }

        public class Handler : IRequestHandler<Query, Result<List<Bookmark>>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Result<List<Bookmark>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName ==  _userAccessor.GetUserName());

                var bookmarks = await _context.Bookmarks
                    .Include(bm => bm.Owner)
                    .Where(bm => bm.Owner.Id == user.Id)
                    .ToListAsync(cancellationToken);

                return Result<List<Bookmark>>.Success(bookmarks);
            }
        }
    }
}