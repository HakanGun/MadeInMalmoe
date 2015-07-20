
if exists(select * from sys.objects where name='GetProjectsForEmployee' and type = 'p')
BEGIN
DROP PROCEDURE [dbo].[GetProjectsForEmployee]
END
GO

/****** Object:  StoredProcedure [dbo].[GetProjectsForEmployee]    Script Date: 2015-07-06 14:53:29 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[GetProjectsForEmployee]
	@EmployeeId int
AS
BEGIN
	SET NOCOUNT ON;
	select p.* from Project p
	inner join EmployeeProject ep on ep.ProjectId = p.ProjectId
	where ep.EmployeeId = @EmployeeId
END

GO

if exists(select * from sys.objects where name='GetBudgetForProject' and type = 'p')
BEGIN
DROP PROCEDURE [dbo].GetBudgetForProject
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE dbo.GetBudgetForProject
	@ProjectId int
AS
BEGIN
	SET NOCOUNT ON;
	select * from Budget where ProjectId = @ProjectId


END
GO


if exists(select * from sys.objects where name='GetProjectEstimate' and type = 'p')
BEGIN
DROP PROCEDURE [dbo].GetProjectEstimate
END
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE dbo.GetProjectEstimate
	@ProjectId int
AS
BEGIN
	SET NOCOUNT ON;
	select * from ProjectEstimate where ProjectId = @ProjectId


END
GO


if exists(select * from sys.objects where name='GetEmployeeProjectWorkingHours' and type = 'p')
BEGIN
DROP PROCEDURE [dbo].GetEmployeeProjectWorkingHours
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE dbo.GetEmployeeProjectWorkingHours
	@ProjectId int,
    @EmployeeId int
AS
BEGIN
	SET NOCOUNT ON;
	select * from EmployeeProjectWorkingHours 
    where ProjectId = @ProjectId and EmployeeId = @EmployeeId


END
GO


if exists(select * from sys.objects where name='GetEmployeesForProject' and type = 'p')
BEGIN
DROP PROCEDURE [dbo].GetEmployeesForProject
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE dbo.GetEmployeesForProject
	@ProjectId int
AS
BEGIN
	SET NOCOUNT ON;
	select * from Employee e
	inner join EmployeeProject ep on ep.EmployeeId = e.EmployeeId  
    where ep.ProjectId = @ProjectId


END
GO

if exists(select * from sys.objects where name='GetEmployeeProjectPlan' and type = 'p')
BEGIN
DROP PROCEDURE [dbo].GetEmployeeProjectPlan
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE dbo.GetEmployeeProjectPlan
	@ProjectId int,
	@EmployeeId int
AS
BEGIN
	SET NOCOUNT ON;
	select * from EmployeeProjectPlan epp
	inner join EmployeeProject ep on ep.EmployeeProjectId = epp.EmployeeProjectId  
    where ep.ProjectId = @ProjectId AND ep.EmployeeId = @EmployeeId


END
GO
