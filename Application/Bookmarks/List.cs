using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Application.Core;

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
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Bookmark>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Bookmark>>.Success(await _context.Bookmarks.ToListAsync(cancellationToken));
            }
        }
    }
}