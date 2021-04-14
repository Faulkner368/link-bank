using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Bookmarks
{
    public class Delete
    {
        public class Command: IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var bookmark = await _context.Bookmarks.FindAsync(request.Id);

                if (bookmark == null) return null;

                _context.Remove(bookmark);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to delete the bookmark");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}