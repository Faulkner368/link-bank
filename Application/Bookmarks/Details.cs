using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Bookmarks
{
    public class Details
    {
        public class Query : IRequest<Result<Bookmark>>
        {   
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Bookmark>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Bookmark>> Handle(Query request, CancellationToken cancellationToken)
            {
                var bookmark = await _context.Bookmarks.FindAsync(request.Id);

                return Result<Bookmark>.Success(bookmark);
            }
        }
    }
}