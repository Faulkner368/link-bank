using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Bookmarks
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Bookmark Bookmark { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(bm => bm.Bookmark).SetValidator(new BookmarkValidator());
            }
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
                request.Bookmark.DateCreated = DateTime.UtcNow;
                _context.Bookmarks.Add(request.Bookmark);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create bookmark");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}