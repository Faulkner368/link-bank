using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Bookmarks
{
    public class Details
    {
        public class Query : IRequest<Result<BookmarkDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<BookmarkDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<BookmarkDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUserName());

                var bookmark = await _context.Bookmarks
                    .Include(bm => bm.Owner)
                    .FirstOrDefaultAsync(bm => bm.Id == request.Id);

                if (bookmark.Owner.Id != user.Id) return null;

                var bookmarkToReturn = _mapper.Map<BookmarkDto>(bookmark);

                return Result<BookmarkDto>.Success(bookmarkToReturn);
            }
        }
    }
}