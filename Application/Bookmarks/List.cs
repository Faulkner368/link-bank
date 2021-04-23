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
using AutoMapper;

namespace Application.Bookmarks
{
    public class List
    {
        public class Query : IRequest<Result<List<BookmarkDto>>>
        {

        }

        public class Handler : IRequestHandler<Query, Result<List<BookmarkDto>>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IUserAccessor userAccessor, IMapper mapper)
            {
                _mapper = mapper;
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Result<List<BookmarkDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUserName());

                var bookmarks = await _context.Bookmarks
                    .Include(bm => bm.Owner)
                    .Where(bm => bm.Owner.Id == user.Id)
                    .ToListAsync(cancellationToken);

                var bookmarksToReturn = _mapper.Map<List<BookmarkDto>>(bookmarks);

                return Result<List<BookmarkDto>>.Success(bookmarksToReturn);
            }
        }
    }
}